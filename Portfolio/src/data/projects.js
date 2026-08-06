import fitbalance from '../assets/projectImg/FitBalance.png'
import mernauth from '../assets/projectImg/mernAuth.png'
import chatApp from '../assets/projectImg/chatApp.png'
import schemaForge from '../assets/projectImg/schemaForge.png'

export const projects = [
    {
        id: 3,
        title: 'SchemaForge',
        image: schemaForge,
        description: 'Built an AI-powered developer tool that converts plain English app descriptions into a complete backend scaffold — generating ER diagrams, Mongoose models, SQL statements, Express routes, and controllers through a 3-layer AI pipeline using Groq and Gemini APIs, with one-click ZIP download.',
        techs: ["React", "Node.js", "Express", "Groq API", "Gemini API", "Mermaid.js", "JSZip"],
        github: "https://github.com/Adamya-Gupta-2005/SchemaForge",
        live: "https://schema-forge-puce.vercel.app/"
    },
    {
        id: 2,
        title: 'ChatApp',
        image: chatApp,
        description: 'Engineered a scalable real-time chat platform with secure JWT authentication, group and direct messaging, password-protected chat rooms, live user presence, and peer-to-peer video calling using Socket.IO and WebRTC.',
        techs: ["MERN", "Socket.IO", "WebRTC", "JWT", "MongoDB", "Axios"],
        github: "https://github.com/Adamya-Gupta-2005/ChatApp",
        live: "https://chat-app-phi-ten-ga4z8vshkm.vercel.app/"
    },
    {
        id: 1,
        title: 'FitBalance',
        image: fitbalance,
        description: 'Built a full-stack AI-powered fitness tracker that enables users to monitor nutrition and workouts, analyze food images using Google Gemini AI, visualize weekly progress, and securely manage personalized fitness goals through JWT authentication.',
        techs: ["MERN", "JWT", "REST API", "Gemini API", "Recharts", "Axios"],
        github: "https://github.com/Adamya-Gupta-2005/FitBalance---AI-Fitness-tracker",
        live: "https://fit-balance-ai-fitness-tracker.vercel.app/"
    },
    {
        id: 0,
        title: 'Authentication System',
        image: mernauth,
        description: 'Developed a secure MERN authentication system featuring user registration, login, email verification via OTP, password reset, and JWT-based authentication with SMTP email delivery using Nodemailer.',
        techs: ["MERN", "JWT", "Nodemailer (SMTP)", "bcrypt.js", "REST API", "Axios"],
        github: "https://github.com/Adamya-Gupta-2005/MERN-Auth",
        live: "https://mern-auth-five-sand.vercel.app/"
    }
];