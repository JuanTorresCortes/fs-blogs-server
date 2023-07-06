const mongoose = require("mongoose");

// Function to connect to MongoDB
const mongooseConnect = async () => {
  try {
    // Connect to MongoDB using the provided Atlas URI
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { mongooseConnect };
