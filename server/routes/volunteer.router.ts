import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */

// Get all scheduled classes
router.get(
  '/classes',
  rejectUnauthenticated,
  (req: Request, res: Response, next: express.NextFunction): void => {
    const query: string = `SELECT "scheduled_classes".*, "programs".image, "programs".sessions, "programs".title, "programs".description, "schools".name FROM "scheduled_classes"
    JOIN "programs" on "programs".id = "scheduled_classes".program_id
    JOIN "schools" on "schools".id = "scheduled_classes".school_id
    WHERE "scheduled_classes".user_id = $1;`;
    const user: any = req.user;

    pool
      .query(query, [user.id])
      .then((dbRes: any): void => {
        res.send(dbRes.rows);
      })
      .catch((error: string): void => {
        console.log(`Error with getting scheduled classes. ${error}`);
        res.sendStatus(500);
      });
  }
);

// Get single scheduled class
router.get(
  '/scheduled/:id',
  rejectUnauthenticated,
  (req: Request, res: Response, next: express.NextFunction): void => {
    const query: string = `SELECT "scheduled_classes".*, "programs".image, "programs".sessions, "programs".title, "programs".description, "schools".name FROM "scheduled_classes"
      JOIN "programs" on "programs".id = "scheduled_classes".program_id
      JOIN "schools" on "schools".id = "scheduled_classes".school_id
      WHERE "scheduled_classes".id = $1;`;
    const scheduled_class_id: any = req.params.id;

    pool
      .query(query, [scheduled_class_id])
      .then((dbRes: any): void => {
        res.send(dbRes.rows);
      })
      .catch((error: string): void => {
        console.log(`Error with getting that class. ${error}`);
        res.sendStatus(500);
      });
  }
);

router.get(
  '/resources/:id',
  rejectUnauthenticated,
  (req: Request, res: Response, next: express.NextFunction): void => {
    const query: string = `SELECT * FROM "learning_material" WHERE "learning_material".program_id = $1;`;
    const program_id: any = req.params.id;

    pool
      .query(query, [program_id])
      .then((dbRes: any): void => {
        res.send(dbRes.rows);
      })
      .catch((error: string): void => {
        console.log(`Error with getting learning material. ${error}`);
        res.sendStatus(500);
      });
  }
);

/**
 * POST route template
 */
// Complete class details
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user: any = req.user;
    // const program_id: number = req.body.program_id;
    const scheduled_class_id: number = req.body.scheduled_class_id;
    const class_size: number = req.body.class_size;

    const query: string = `UPDATE "scheduled_classes"
      SET "size" = $2, "completion_date" = CURRENT_DATE 
        WHERE "id" = $1;`;

    pool
      .query(query, [scheduled_class_id, class_size])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving completed class details to database: ${err}`);
        res.sendStatus(500);
      });
  }
);

//
// POST image URL to database
// NOTE: this route fires off after a photo has been uploaded via the S3ImageUploader.js component
// This is independent from the above route for submitting a report.

router.post(
  '/saveImageUrl',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user_id: any = req.user;
    const program_id: number = <number>req.body.program_id;
    const class_id: number = <number>req.body.class_id;
    const imageUrl: string = req.body.imageUrl;
    const s3_key: string = req.body.s3_key;

    const queryText: string = `INSERT INTO "images" ("user_id", "program_id", "scheduled_class_id", "image_url", "s3_key")
    VALUES ($1, $2, $3, $4, $5);`;

    pool
      .query(queryText, [user_id.id, program_id, class_id, imageUrl, s3_key])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error saving image url to database. ', err);

        res.sendStatus(500);
      });
  }
);

router.post(
  '/newScheduledClass',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user_id: number = <number>req.body.user_id;
    const program_id: number = <number>req.body.program_id;
    const school_id: number = <number>req.body.school_id;

    console.log('look at this: ', user_id, program_id, school_id);

    const queryText: string = `INSERT INTO "scheduled_classes" ("user_id", "program_id", "school_id")
    VALUES ($1, $2, $3);`;

    pool
      .query(queryText, [user_id, program_id, school_id])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

// module.exports = router;

export default router;
