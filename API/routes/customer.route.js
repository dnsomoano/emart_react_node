// Defined get data(index or listing) route
// member.route.js

const express = require('express');
const app = express();
const customerRoutes = express.Router();


customerRoutes.route('/').get(function (req, res) {
    console.log("test get req");
    res.send('Hello World, from express');
//   Member.find(function (err, members) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.json(members);
//     }
//   });
});

module.exports = customerRoutes;