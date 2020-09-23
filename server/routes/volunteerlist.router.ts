import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const account_type_id = 2;
    const queryText = `SELECT "users".first_name, "users".last_name, "users".telephone, "users".email, "users".id AS "user_id", "users".username, array_agg("programs".title) AS "scheduled_classes" FROM "users"
    LEFT JOIN "scheduled_classes" ON "scheduled_classes".user_id = "users".id
    LEFT JOIN "programs" ON "programs".id = "scheduled_classes".program_id
    
    WHERE "users".account_type_id = $1
    GROUP BY "users".id;`;
    pool
      .query(queryText, [account_type_id])
      .then((response) => res.send(response.rows))
      .catch((error) => console.log('Error in dog get route', error));
  }
);

router.delete(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const id: string = req.params.id;
    const queryText = `DELETE FROM "users" WHERE "users".id=$1`;
    pool
      .query(queryText, [id])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

router.put('/:id', (req, res) => {
  const id: string = req.params.id;
  const username: string = <string>req.body.username;
  const first_name: string = req.body.first_name;
  const last_name: string = req.body.last_name;
  const email: string = req.body.email;
  const telephone: string = req.body.telephone;

  const queryText =
    'UPDATE "users" SET "username"=$1, "first_name"=$2, "last_name"=$3, "email"=$4, "telephone"=$5 WHERE "users"=$6;';
  pool
    .query(queryText, [username, first_name, last_name, email, telephone, id])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

export default router;
