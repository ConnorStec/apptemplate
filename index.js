'use strict';

require('dotenv').config();

process.on('unhandledRejection', function (reason, p) {
  console.error(`Possible unhandled rejection at: Promise ${JSON.stringify(p)}, Reason ${reason}`);
});

// https support via https://web.dev/how-to-use-local-https/
const fs = require('fs');
const http = require('http');
const https = require('https');
const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');
const httpsOpts = {
  key,
  cert,
};

const express = require('express');
const Pool = require('pg').Pool;

const app = express();
app.use(express.json());

const port = 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: 'localhost',
  database: process.env.DB_NAME,
  max: 10,
  idleTimeoutMillis: 1000
});

const ip = require('ip');

app.use('/', express.static(`${__dirname}/browser/dist/`));

app.route('/').get((req, res) => {
  console.log('hello route')
  return res.sendStatus(200)
})

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOpts, app);

httpServer.listen(3000, () => {
  console.log('http server listening')
});
httpsServer.listen(8443, () => {
  console.log('https server listening')
});

// app.listen(port, () => {
//   app.route('/api/listings')
//     .all((req, res, next) => {
//       return next();
//     })
//     .get((req, res) => {
//       pool.query('SELECT * FROM listings')
//         .then((result) => {
//           return res.send(result.rows);
//         })
//     })
//     .post((req, res) => {
//       pool.query({
//         text: `
//         INSERT INTO listings
//         (
//           name,
//           mileage,
//           mpgcity,
//           mpghighway,
//           color,
//           engine,
//           transmission,
//           price,
//           details
//         )
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//         RETURNING *
//       `,
//         values: Object.values(req.body.listing)
//       }).then((result) => {
//         return res.send(result.rows);
//       }).catch((err) => {
//         console.error('Query error: ' + err);
//       });
//     });
//   console.log('App listening on port ' + port);
//   console.log('Local IP: ' + ip.address());
// });
