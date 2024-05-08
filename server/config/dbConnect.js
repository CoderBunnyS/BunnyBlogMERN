const mongoose = require("mongoose");

// Define an async function to connect to the database
const dbConnect = async () => {
  try {
    // Connect to the MongoDB database using the connection string
    await mongoose.connect(process.env.mongo_url);
    console.log("MongoDB connection successful"); // Log a success message
  } catch (error) {
    // Log an error message if the connection fails
    console.log("Mongo DB Connection failed");
    console.log(error); // Log the error message
  }
};

// Execute the dbConnect function immediately upon module load
dbConnect();
