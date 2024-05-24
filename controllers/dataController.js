const Data = require("../models/data");

exports.getData = async (req, res) => {
  try {
    const data = await Data.find({}).limit(30);
    console.log("Fetched Data:", data); // Log the fetched data to the terminal
    res.json(data); // Send the data as JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addData = async (req, res) => {
  try {
    const newData = new Data(req.body);
    const savedData = await newData.save();
    console.log("Saved Data:", savedData); // Log the saved data to the terminal
    res.status(201).json(savedData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Server error" });
  }
};
