import fitbalance from '../assets/projectImg/FitBalance.png'
import mernauth from '../assets/projectImg/mernAuth.png'

export const projects = [
    {
        id:1,
        title: 'FitBalance',
        image: fitbalance,
        description: 'Built a full-stack AI-powered fitness tracker that enables users to monitor nutrition and workouts, analyze food images using Google Gemini AI, visualize weekly progress, and securely manage personalized fitness goals through JWT authentication.',
        techs: ["MERN", "JWT", "REST API", "Gemini API", "Recharts", "Axios"],
        github: "https://github.com/Adamya-Gupta-2005/FitBalance---AI-Fitness-tracker",
        live: "https://fit-balance-ai-fitness-tracker.vercel.app/"
    },
    {
        id:0,
        title: 'Authentication System',
        image: mernauth,
        description: 'Developed a secure MERN authentication system featuring user registration, login, email verification via OTP, password reset, and JWT-based authentication with SMTP email delivery using Nodemailer.',
        techs: ["MERN", "JWT", "Nodemailer (SMTP)", "bcrypt.js", "REST API", "Axios"],
        github: "https://github.com/Adamya-Gupta-2005/MERN-Auth",
        live: "https://mern-auth-five-sand.vercel.app/"
    }
];