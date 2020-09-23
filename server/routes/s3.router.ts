import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import * as AWS from 'aws-sdk';

const router: express.Router = express.Router();

const s3 = new AWS.S3();

AWS.config.update({
  // region: 'us-east-1', // Put your aws region here
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

router.get('/img', (req: Request, res: Response): void => {
  console.log('Trying to get photos.');

  const params = {
    Bucket: 'operisstorage',
    MaxKeys: 20,
  };
  s3.listObjectsV2(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else {
      res.send(data.Contents);
    } // successful response
  });
});

router.get(
  '/',
  rejectUnauthenticated,
  (req: Request, res: Response, next: express.NextFunction): void => {
    const query: string = `SELECT "images".*, "users".first_name, "users".last_name,"programs".title, "scheduled_classes".id AS "scheduled_class_id" FROM "images"
    JOIN "scheduled_classes" ON "scheduled_classes".id = "images".scheduled_class_id
    JOIN "users" ON "users".id = "scheduled_classes".user_id
    JOIN "programs" ON "programs".id = "scheduled_classes".program_id
    
    ORDER BY "images".upload_date;`;

    pool
      .query(query)
      .then((dbRes: any): void => {
        res.send(dbRes.rows);
      })
      .catch((error: string): void => {
        console.log(`Error with getting images from database. ${error}`);
        res.sendStatus(500);
      });
  }
);

// router.delete('/', rejectUnauthenticated, (req: any, res: any) => {
//   const params = {
//     Bucket: 'operisstorage',
//     Key: req.body.s3_key,
//   };
//   s3.deleteObject(params, function (err, data) {
//     if (err)
//       console.log(
//         'There was an error with deleting the object. ',
//         err,
//         err.stack
//       );
//     // an error occurred
//     else console.log('Object deleted. ', data); // successful response
//     /*
//          data = {
//          }
//          */
//   });
// });

router.delete(
  '/delete/:key',
  async (
    req: Request,
    res: Response,
    next: express.NextFunction
  ): Promise<void> => {
    try {
      const deleteQuery: string = `DELETE FROM "images" WHERE "images".s3_key = $1;`;
      await pool
        .query(deleteQuery, [req.params.key])
        .then((dbRes) => {
          console.log('trying to delete: ', req.params.key);

          res.sendStatus(200);
        })
        .catch((err) => {
          console.log('Error deleting image from database: ', err);
          res.sendStatus(500);
        });

      const params = {
        Bucket: 'operisstorage',
        Key: req.params.key,
      };
      s3.deleteObject(params, function (err, data) {
        if (err)
          console.log(
            'There was an error with deleting the object. ',
            err,
            err.stack
          );
        // an error occurred
        else console.log('Object deleted. ', data); // successful response
      });

      res.status(200);
    } catch (err) {
      console.log(`Error Deleting Image!: ${err}`);
      res.sendStatus(500);
    }
  }
);

export default router;
