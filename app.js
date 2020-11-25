const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")


const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "MP API" });
});

//Routes

require("./routes/users.routes.js")(app);
require("./routes/other.routes.js")(app);


app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });