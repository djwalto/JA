import express from 'express';
import bodyParser from 'body-parser';
import sessionMiddleware from './modules/session-middleware';
import passport from './strategies/user.strategy';

// Routers
import userRouter from './routes/user.router';
import volunteerRouter from './routes/volunteer.router';
import trainingRouter from './routes/training.router';
import reportformRouter from './routes/report-form.router';
import programsRouter from './routes/programs.router';
import volunteerlistRouter from './routes/volunteerlist.router';
import adminboxesRouter from './routes/counterboxes.router';
import s3Router from './routes/s3.router';
import schoolsRouter from './routes/schools.router';

import * as dotenv from 'dotenv';
dotenv.config();

const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

const app: any = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

app.use('/api/volunteer', volunteerRouter);

app.use('/api/training', trainingRouter);
app.use('/api/report-form', reportformRouter);
app.use('/api/programs', programsRouter);
app.use('/api/volunteerlist', volunteerlistRouter);
app.use('/api/counters', adminboxesRouter);
app.use('/api/schools', schoolsRouter);

app.use('/api/s3', s3Router);

app.use(
  '/s3',
  UploaderS3Router({
    bucket: 'operisstorage', // This will be changed for production.
    region: 'us-east-2', // optional
    headers: { 'Access-Control-Allow-Origin': '*' }, // optional
    ACL: 'public-read', // private is the default - set to `public-read` to let anyone view uploads
    uniquePrefix: true, // true is the default. This prevents overwriting a file with the same name.
  })
);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT: number | string = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, (): void => {
  console.log(`So awesome. Much wow. Listening on port: ${PORT}`);
});

export default app;
