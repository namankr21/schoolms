// importing dependencies
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;


// middlewares








// server calling
app.listen(PORT, () => {
  console.log("server listening on port 8080");
});
