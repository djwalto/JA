import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get(
  '/completed',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT (*) FROM "scheduled_classes" WHERE "completion_date" IS NOT NULL;`;
    pool
      .query(queryText)
      .then((response) => res.send(response.rows[0]))
      .catch((error) => console.log('Error in programs GET:', error));
  }
);

/**
 * GET route template
 */
router.get(
  '/inprogress',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT (*) FROM "scheduled_classes"
    WHERE "completion_date" IS NULL;
    `;
    pool
      .query(queryText)
      .then((response) => res.send(response.rows[0]))
      .catch((error) => console.log('Error in programs GET:', error));
  }
);
/**
 * GET route template
 */
router.get(
  '/students',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT SUM ("size") FROM "scheduled_classes";`;
    pool
      .query(queryText)
      .then((response) => res.send(response.rows[0]))
      .catch((error) => console.log('Error in programs GET:', error));
  }
);

/**
 * GET route template
 */
router.get(
  '/numbervolunteers',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT (*) FROM "users"
        WHERE "account_type_id" = 2;`;
    pool
      .query(queryText)
      .then((response) => res.send(response.rows[0]))
      .catch((error) => console.log('Error in programs GET:', error));
  }
);

export default router;
