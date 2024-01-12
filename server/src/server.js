const express = require("express");
const { router } = require("../routes/router");
const cors = require('cors');
const server = express();
const port = 5000;


// server.use(express.static(pat.join(__dirname, 'client/build')));

// // Use body-parser to parse incoming requests
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.json());
const db = require("../models");
const { userRouter } = require("../routes/user");
db.sequelize.sync().then(() => {
  server.listen(port, () => {
    console.log(`Example server listening on port ${port}`);
  });
});


server.use(cors());
server.use("/", router);
server.use("/", userRouter);
