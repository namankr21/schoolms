const mongoose = require('mongoose');


const dbConnection = () => {
    mongoose
      .connect(
        "mongodb://127.0.0.1:27017/schoolms"
      )
      .then(() => console.log("Database Connection Successfull"))
      .catch((err) =>
        console.log("Failed To Connect With Database, \nReason : " + err.message)
      );
  };
  
  module.exports = dbConnection;
  