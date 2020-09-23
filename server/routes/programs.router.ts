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
    const queryText = `SELECT * FROM "programs";`;
    pool
      .query(queryText)
      .then((response) => res.send(response.rows))
      .catch((error) => console.log('Error in programs GET:', error));
  }
);

/**
 * POST route template
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const title: string = req.body.title;
    const image: string = req.body.image;
    const queryText = `INSERT INTO "programs" (title, image)
    VALUES ($1, $2);`;
    pool
      .query(queryText, [title, image])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving user to database: ${err}`);
        res.sendStatus(500);
      });
  }
);

router.delete(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const id: string = req.params.id;
    const queryText = `DELETE FROM "programs" WHERE "programs".id=$1`;
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
    const title: string = req.body.title;
    const image: string = req.body.image;
    const id: string = req.params.id;

    const queryText = `UPDATE "learning_material" SET "title"=$1, "image"=$2 WHERE "id"=$3);`;
    pool
      .query(queryText, [title, image, id])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

export default router;
