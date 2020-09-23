import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route training
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT * FROM "learning_material";`;
    pool
      .query(queryText)
      .then((response) => res.send(response.rows))
      .catch((error) => console.log('Error in training GET:', error));
  }
);

/**
 * POST route training
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const program_id: string = req.body.program_id;
    const title: string = req.body.title;
    const content: string = req.body.content;

    const queryText = `INSERT INTO "learning_material" VALUES ($1, $2, $3);`;
    pool
      .query(queryText, [program_id, title, content])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

router.delete(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const id: string = req.params.id;
    const queryText = `DELETE FROM "learning_material" WHERE "learning_material".id=$1`;
    pool
      .query(queryText, [id])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

router.put(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const program_id: string = req.body.program_id;
    const title: string = req.body.title;
    const content: string = req.body.content;

    const queryText = `UPDATE "learning_material" SET "program_id"=$1, "title"=$2, "content"=$3);`;
    pool
      .query(queryText, [program_id, title, content])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

export default router;
