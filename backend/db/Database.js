const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`mongodb connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1); // Exit the process with failure
    });
};

module.exports = connectDatabase;
