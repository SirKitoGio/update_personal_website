// src/data.js

export const personalData = {
  name: "Keith Alan T. Speirs", // 
  role: "Data Intern & IT Student", // 
  contact: {
    email: "keithalan.speirs25@gmail.com", // [cite: 3]
    linkedin: "https://www.linkedin.com/in/keith-speirs/", // [cite: 3]
    github: "https://github.com/SirkitoGio", // [cite: 6]
    location: "Philippines (Dual Citizen UK/PH)" // [cite: 4]
  },
  skills: [
    "Python", "SQL", "AWS (Redshift, Lambda, S3)", "Snowflake", "Java", "Flutter" // 
  ],
  experience: [
    {
      id: 1,
      company: "Union Digital Bank", // [cite: 5]
      role: "Data Intern", // [cite: 5]
      period: "Nov 2025 - Present", // [cite: 5]
      description: "Building serverless data pipelines using AWS Lambda and Redshift.", // [cite: 7]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Kape4U", // [cite: 21]
      tech: ["Flutter", "Dart", "Google Maps API"], // [cite: 21]
      summary: "Geolocation-based app to locate nearby coffee shops in real-time." // [cite: 22]
    },
    {
      id: 2,
      title: "Coffee Shop Market Analytics", // [cite: 24]
      tech: ["Python", "AWS S3", "Google Places API"], // [cite: 24]
      summary: "Automated ETL pipeline extracting reviews for 50+ local shops." // [cite: 25]
    }
  ]
};