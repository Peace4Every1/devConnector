const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

//good practice wrap async functions in try catchs
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });

    console.log("MongoDB connected!");
  } catch (err) {
    console.log(11111111111111111);
    console.error(err.message);

    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
