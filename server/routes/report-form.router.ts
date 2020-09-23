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
    const queryText = `SELECT "users".first_name, "users".last_name, "schools".name, "programs".title, "scheduled_classes".size, "scheduled_classes".completion_date FROM "scheduled_classes"
    JOIN "schools" ON "scheduled_classes".school_id = "schools".id
    JOIN "users" ON "scheduled_classes".user_id = "users".id
    JOIN "programs" ON "scheduled_classes".program_id = "programs".id;`;
    pool
      .query(queryText)
      .then((response) => res.send(response.rows))
      .catch((error) => console.log('Error in report-form GET:', error));
  }
);

/**
 * POST route template
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const class_id: string = req.body.class_id;
    const school_name: string = req.body.school_name;
    const volunteer_name: string = req.body.volunteer_name;
    const size: string = req.body.size;
    const completion_date: string = req.body.completion_date;
    // const user_id:

    const queryText = `INSERT INTO "scheduled_classes" VALUES ($1, $2, $3, $4, $5);`;
    pool
      .query(queryText, [
        class_id,
        school_name,
        volunteer_name,
        size,
        completion_date,
      ])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

//
// POST image URL to database
// NOTE: this route fires off after a photo has been uploaded via the S3ImageUploader.js component
// This is independent from the above route for submitting a report.

router.post(
  '/saveImageUrl',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user_id: number = <number>req.body.user_id;
    const program_id: number = <number>req.body.program_id;
    const class_id: number = <number>req.body.class_id;
    const imageUrl: string = req.body.imageUrl;
    const s3_key: string = req.body.s3_key;

    const queryText: string = `INSERT INTO "images" ("user_id", "program_id", "scheduled_class_id", "image_url", "s3_key")
    VALUES ($1, $2, $3, $4, $5);`;

    pool
      .query(queryText, [user_id, program_id, class_id, imageUrl, s3_key])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Saving image to database failed. ', err);
        res.sendStatus(500);
      });
  }
);

router.delete(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const id: string = req.params.id;
    const queryText = `DELETE FROM "scheduled_classes" WHERE "scheduled_classes".id=$1`;
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

    const queryText = `UPDATE "scheduled_classes" SET "title"=$1, "image"=$2 WHERE "id"=$3);`;
    pool
      .query(queryText, [title, image, id])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

export default router;
