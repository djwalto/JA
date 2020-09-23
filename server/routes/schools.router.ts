import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */

// Get all schools
router.get(
  '/',
  rejectUnauthenticated,
  (req: Request, res: Response, next: express.NextFunction): void => {
    const query: string = `SELECT * FROM "schools";`;

    pool
      .query(query)
      .then((dbRes: any): void => {
        res.send(dbRes.rows);
      })
      .catch((error: string): void => {
        console.log(`Error with getting schools. ${error}`);
        res.sendStatus(500);
      });
  }
);

/**
 * POST route template
 */
// Add a new school
router.post(
  '/add',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const name: string = req.body.name;
    const address: string = req.body.address;
    const city: string = req.body.city;
    const state: string = req.body.state;
    const zip: number = req.body.zip;

    const queryText: string = `INSERT INTO "schools" ("name", "address", "city", "state", "zip")
    VALUES ($1, $2, $3, $4, $5);`;

    pool
      .query(queryText, [name, address, city, state, zip])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error adding school: ', err);
        res.sendStatus(500);
      });
  }
);

export default router;
