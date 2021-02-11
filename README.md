# CS Autosales

This serves as a close to barebones template you can use to create a Node/Express/PostgreSQL backend with a [vue-cli](https://cli.vuejs.org/)-built frontend to get started on the fun parts of your app faster. The challenge I was faced with whose solution made me want to set this up was how to allow an app to switch from dev and prod builds quickly without running into CORS or other issues. Gave me enough trouble that I didn't want to deal with it again. The magic in the solution boils down to vue.config.js and this line from the api index.js `app.use('/', express.static(__dirname + '/browser/dist/'));`. That's it. The rest isn't anything special, but might be faster for your needs.

## Getting Started
- Install [NodeJS](https://nodejs.org/)
  - Though I highly recommend using [NVM](https://github.com/nvm-sh/nvm)
  - This was built on v12.17.0
- Install [PostgreSQL](https://www.postgresql.org/download/)
- Create a local .env file with keys for:
  - DB_USER - the database username the app will use to connect
  - DB_PASS - your chosen password for the above user
  - DB_NAME - name of the database for your app
- Create the database
  - Become postgres `sudo su postgres`
  - Enter the db shell `psql`
  - Create the db `create database [DB_NAME]`
  - Create your user and password `create user [DB_USER] with password [DB_PASS]`
  - Create DB tables `\i apptemplate/sql/initdb.sql`
  - Enter `COMMIT;` to finalize and `\q` to exit the shell
- Install app dependencies with `npm i`
  - The `postinstall` will install your browser dependencies automatically
- Start your servers
  - Development
    - `npm run serve` from /browser
    - `npm start` from the root
    - Access the app at localhost:8080
  - Production
    - `npm run build` from /browser
    - `npm start` from root
    - Access the app at localhost:3000


From there it's up to you. Create some listings in the DB. Add support for creating listings in the app. Dump the temp files and get straight to work. Lotta options.