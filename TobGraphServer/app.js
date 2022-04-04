// IMPORT
const express = require('express');
const bodyParser = require('body-parser');
const neo4j = require('neo4j-driver');
const cors = require('cors');

const config = require('./config/config.json');

// Set app
const app = express();
const ports = process.env.PORT || 3001;

// Set Cors policy
const cors_post = cors({
  origin: config.post.authorizedHost,
  allowedMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: true,
});

const cors_get = cors({
  origin: config.get.authorizedHost,
  allowedMethods: ["GET"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: true,
});

// Set body parser
app.use(bodyParser.json());

// Create driver for neo4j
const driver = neo4j.driver(
  config.neo4j.host,
  neo4j.auth.basic(config.neo4j.user, config.neo4j.password)
);

// POST
app.get("/post", cors_post, (req, res) => {
  res.send("Hello POST");
});


// GET //////////////////////////////////////////////////////////////////////////////////////////////////////////

// NODE
app.get("/get/concepts/node/", cors_get, (req, res) => {

  let session = driver.session();

  session.run("MATCH (c:Concept) RETURN c;").then(result => {
    let obj = {};

    result.records.forEach(r => {
      let properties = r._fields[0].properties;
      obj[properties.code] = properties;
    });

    res.send(obj);

    session.close();

  }).catch(err => {
    console.log(err);
    res.send({ "error": err });
  });

});

app.get("/get/concepts/node/:code", cors_get, (req, res) => {
  // Get codes
  let codes = req.params.code.split(",");

  let query = 'MATCH (c:Concept) WHERE c.code IN ["' + codes.join('","') + '"] RETURN c;';

  let session = driver.session();

  session.run(query).then(result => {
    let obj = {};

    result.records.forEach(r => {
      let properties = r._fields[0].properties;
      obj[properties.code] = properties;
    });

    res.send(obj);

  }).catch(err => {
    console.log(err);
    res.send({ "error": err });
  });

});

// TREE
// app.get("/get/concepts/tree/", cors_get, (req, res) => {
//   let session = driver.session();

//   session.run("MATCH (c:Concept) RETURN c;").then(result => {
//     let obj = {};

//     result.records.forEach(r => {
//       let properties = r._fields[0].properties;
//       obj[properties.code] = properties;
//     });

//     // rearrange
//     let result = Node.treeStruct(obj);

//     session.close();

//   }).catch(err => {
//     console.log(err);
//     res.send({ "error": err });
//   });
// });

// app.get("/get/concepts/root/:code", cors_get, (req, res) => {
//   // Get codes

//   let query = 'MATCH (c:Concept)-[:IS_CODED_FROM]->WHERE c.code IN ["' + codes.join('","') + '"] RETURN c;';

//   let session = driver.session();

//   session.run(query).then(result => {
//     let obj = {};

//     result.records.forEach(r => {
//       let properties = r._fields[0].properties;
//       obj[properties.code] = properties;
//     });

//     res.send(obj);

//   }).catch(err => {
//     console.log(err);
//     res.send({ "error": err });
//   });

// });



app.listen(ports, () => {
  console.log(`API GET Graph listening on port ${ports}`)
})

// Close connection
driver.close();