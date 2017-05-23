# Craft WW Code Test

## Approach:
My approach to this app was to first provide a solution that would allow users to create accounts and login to see their dashboard.  Users would be able to save and delete Subreddit posts to and from their dashboard.

## ERD:
![ERD](/public/img/erd.png)

## Technologies Used:
* HTML
* CSS
* Javascript
* Node / Express

## Server-Side Dependencies:
* Users can run an 'NPM install' command upon downloading the app, which will implement the following dependencies:
  - bcrypt (1.0.2)
  - body-parser (1.17.2)
  - cors (2.8.3)
  - ejs (2.5.6)
  - express (4.15.3)
  - express-session (1.15.3)
  - jsonwebtoken (7.4.1)
  - method-override (2.3.9)
  - morgan (1.8.1)
  - node-fetch (1.7.0)
  - path (0.12.7)
  - pg-promise (5.7.1)

## To Run App:
* In postgreSQL - you will need to create a database called 'craft_db' and seed the database with the migrations folder.
  - To create the database: in your terminal type the command 'psql', and then 'CREATE DATABASE craft_db;'
  - Then quit the psql environment, and from your terminal, cd into the top level directory, and run the command 'psql -d craft_db -f migration/migrations.sql' which will create the Users and Posts tables in your database.
  - Last, to run this app locally - use the terminal command 'nodemon' to spin up the Express server on your localhost:3000 port.
  - *** Please Note ***
    * Due to time-constraints and per Unfinished Issues (below), I was unable to complete the controller show method in the posts controller, and the saved posts are being stored in the database with a hard-coded user_id of 1.  
      - Currently, the easiest way the access the user dashboard is to login.

## Unfinished Issues
- Styling
- Wasn't able to quite finish functionality to save posts based on user account.  The functionality that's working now is you're able to save posts to the user account that's been hard coded with an ID of 1, and see all saved posts in the user/show.ejs. With slightly more time I'm confident I would be able to debug this.

## Notes
- I took roughly a 45 min break while coding this, so my commit history from start to finish is roughly 6:45;
