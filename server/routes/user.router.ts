import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';
import hexGen from '../modules/hex';
import * as nodemailer from 'nodemailer';
import { QueryResult } from 'pg';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER, // these should be replaced with .env variables
    pass: process.env.NODEMAILER_PASSWORD, // replace with .env variable
  },
});

const router: express.Router = express.Router();
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  res.send(req.user);
});

// View pending invitations
router.get(
  '/pending',
  rejectUnauthenticated,
  (req: Request, res: Response): void => {
    const queryText: string = `SELECT "email" FROM "invites"`;

    pool
      .query(queryText)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((err) => {
        console.log('Error getting pending invites. ', err);
        res.sendStatus(500);
      });
  }
);

// Invite new user
router.post(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const newHex: string = hexGen(8);
      const email: string = req.body.email;
      const account_type_id: number = <number>req.body.account_type_id;

      const queryString = `INSERT INTO "invites" ("email", "hex", "account_type_id") VALUES ($1, $2, $3);`;

      await pool.query(queryString, [email, newHex, account_type_id]);

      let link: string = ``;
      let subjectText: string = ``;

      if (account_type_id === 1) {
        link = `http://localhost:3000/#/adminregister/${newHex}`;
        subjectText = `Invitation to create an administrator account with JA KC!`;
      } else {
        link = `http://localhost:3000/#/volunteerregister/${newHex}`;
        subjectText = `Invitation to volunteer with JA KC!`;
      }

      const message: string = `You have been invited to create an account on Junior Achievement Connect KC! Follow this link to register: ${link}`;
      const subject: string = subjectText;

      const mailOptions = {
        from: `"Junior Achievement Admin" juniorachievement.kc@gmail.com`,
        to: email,
        subject: subject,
        text: message,
        html: '<b>' + message + '</b>',
      };

      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(`error: ${error}`);
        }
        console.log(`Message Sent ${info.response}`);
        res.sendStatus(200);
      });

      res.sendStatus(201);
    } catch (err) {
      console.warn(err);
      res.sendStatus(500);
    }
  }
);

// Register new user using hex code sent via email.
// Deletes email from invites table after user has been registered.
router.post(
  '/register/:hex',
  async (
    req: Request,
    res: Response,
    next: express.NextFunction
  ): Promise<void> => {
    try {
      const userQueryText = `SELECT * FROM "invites" WHERE "email"=$1 AND "hex"=$2;`; //will need to replace invites with proper table name

      const response: any = await pool.query(userQueryText, [
        req.body.email.toLowerCase(),
        req.params.hex,
      ]);
      if (response.rows.length === 0) {
        console.log('hex match:', response.rows[0]);
        res.send(401);
        return;
      }

      const username: string = <string>req.body.username;
      const password: string = encryptPassword(req.body.password);
      const first_name: string = <string>req.body.first_name;
      const last_name: string = <string>req.body.last_name;
      const email: string = <string>req.body.email;
      const telephone: string = <string>req.body.telephone;
      const account_type_id: number = <number>req.body.account_type_id;
      const queryText: string = `INSERT INTO "users" (username, password, first_name, last_name, email, telephone, account_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;`;
      const saveResponse: QueryResult<any> = await pool.query(queryText, [
        username,
        password,
        first_name,
        last_name,
        email,
        telephone,
        account_type_id,
      ]);

      const deleteHex: string = `DELETE FROM "invites" WHERE "id" = $1;`;
      await pool.query(deleteHex, [response.rows[0].id]);
      console.log(`Success! User registered and removed from invites table.`);

      res.status(201);
      res.send(saveResponse);
    } catch (err) {
      console.log(`Error saving user to database: ${err}`);
      res.sendStatus(500);
    }
  }
);

// Login
router.post(
  '/login',
  userStrategy.authenticate('local'),
  (req: Request, res: Response): void => {
    res.sendStatus(200);
  }
);

// Logout
router.post('/logout', (req: Request, res: Response): void => {
  req.logout();
  res.sendStatus(200);
});

router.get(
  '/adminlist',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const account_type_id = '1';
    const queryText = `SELECT * FROM "users" WHERE "account_type_id"=$1;`;
    pool
      .query(queryText, [account_type_id])
      .then((response) => res.send(response.rows))
      .catch((error) => console.log('Error in programs GET:', error));
  }
);

export default router;
