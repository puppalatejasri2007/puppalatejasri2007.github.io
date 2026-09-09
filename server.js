const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Puppala Tejasri Portfolio Backend is running!"
  });
});

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Puppala Tejasri",
    role: "Electrical & Electronics Engineering Student",
    college: "National Institute of Technology Nagaland",
    degree: "Bachelor of Technology",
    branch: "Electrical and Electronics Engineering",
    duration: "2024 - 2028",
    cgpa: "9.05",
    researchInterests: [
      "Artificial Intelligence",
      "Computer Vision",
      "Deep Learning",
      "Embedded Systems",
      "IoT-based Automation Systems"
    ],
    programming: ["Python", "C", "C++", "MATLAB"],
    aiComputerVision: [
      "CNN Models",
      "VGG16",
      "ResNet",
      "Face Recognition",
      "OpenCV",
      "Feature Extraction"
    ],
    tools: ["NumPy", "OpenCV", "ESP32-CAM", "PIR Motion Sensor", "Basic IoT Systems"],
    softSkills: ["Leadership", "Teamwork", "Problem Solving", "Communication", "Analytical Thinking"],
    languages: {
      english: "Fluent",
      telugu: "Native",
      hindi: "Conversational"
    }
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all fields."
    });
  }

  console.log("\n==============================");
  console.log("NEW CONTACT MESSAGE");
  console.log("==============================");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  console.log("==============================\n");

  res.json({
    success: true,
    message: "Thank you! Your message has been received."
  });
});

app.listen(PORT, () => {
  console.log("");
  console.log("======================================");
  console.log("PUPPALA TEJASRI PORTFOLIO BACKEND");
  console.log("======================================");
  console.log(`Server running at: http://localhost:${PORT}`);
  console.log("======================================");
  console.log("");
});
