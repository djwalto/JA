# JA Connect
## Description
Junior Achievement KC has an amazing operation that sets out to help kids become financially literate, develop an entrepreneurial mindset, and become career-ready after their education is complete by way of local volunteers facilitating classes. Currently, when a volunteer signs up they are then assigned a class to teach via email, and it is up to the volunteer to respond back to Junior Achievement KC when that class has been completed. This has led to a lengthy process of emails and phone calls to collect completion details once classes have been completed by the volunteer. We have set out to help streamline that process and make it more efficient for both the administrators and the volunteers of Junior Achievement KC by allowing volunteers to submit their completion data to administrators directly via the app. Administrators are able to manage volunteers, admins, classes, learning materials, and reporting data from the administrative part of the app.
## Prerequisites
Before you get started, make sure you have the following software installed on your computer:
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
## Create database and table
### Local Development
When developing locally `docker-compose up` will build all tables based on `init.sql` and `data.sql`.
### For Deployment
Create a new database called `ja_kc` and create an `account_type` and a `users` table:
```SQL
CREATE TABLE "account_type"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(50) NOT NULL
);
CREATE TABLE "users"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) NOT NULL,
    "first_name" VARCHAR(80) NOT NULL,
    "last_name" VARCHAR(80) NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "account_type_id" INT REFERENCES "account_type",
    "email" VARCHAR(80),
    "telephone" VARCHAR(20)
```
If you would like to name your database something else, you will need to change `ja_kc` to the name of your new database name in `server/modules/pool.js`
### AWS S3
You will need an Amazon S3 account to store pictures.
Go to https://aws.amazon.com/free/storage/s3/ and click the `Get Started for Free` button.
Click the `Create a new AWS account` button
Fill in the registration form
Follow directions from this link https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html to set up a bucket. Pay particular attention to select the correct region and to allow public access.
## Development Setup Instructions
- Run `npm install`
- Create a `.env` file at the root of the project and paste these lines into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  AWS_ACCESS_KEY_ID=xxxxxxxxxx
  AWS_SECRET_ACCESS_KEY=xxxxxxxxxxx
  NODEMAILER_USER=AN_EMAIL_ADDRESS@gmail.com
  NODEMAILER_PASSWORD=xxxxxxxxxxxxx
  NODEMAILER_FROM=AN_EMAIL_ADDRESS@gmail.com
  ```
While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
You will also want to replace the template data for AWS and Nodemailer with your own unique data.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`
Directory Structure:
- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App
## Deployment
1. Add Heroku remote to project: `git remote add heroku <herokuURL> `
1. Connect to the Heroku Postgres database from Postico (Retrieve connection configuration from heroku).
1. Make all neccessary new feature development changes, ensuring that you have commited your changes.
1. `git push heroku master` for final deployment.
## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.
Also thanks to the development team: [David Walton](https://github.com/djwalto), [Ailea Patrinely](https://github.com/aileapatrinely), [Skyler Burgard](https://github.com/SkylerBurgard), and [Kenneth Carter](https://github.com/kxccarter) for their hard work.