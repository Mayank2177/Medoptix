/* eslint-disable */

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaStethoscope, FaHeartbeat, FaRobot, FaEnvelope } from "react-icons/fa";

export default function Landing() {
    return (
        <div className="landing-container">
            {/* NAVBAR */}
            <nav className="navbar">
                <div className="logo">HealthPredict AI</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* HERO SECTION */}
            <section id="home" className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-text"
                >
                    <h1>Predictive Hospital Management</h1>
                    <TypeAnimation
                        sequence={[
                            "During Festivals 🎆",
                            2000,
                            "During Pollution Spikes 🌫️",
                            2000,
                            "During Epidemics 🦠",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="typewriter"
                    />
                    <p>
                        Empowering hospitals with AI-driven insights to optimize staff, supplies,
                        and patient care during critical times.
                    </p>
                    <button className="cta-btn">Get Started</button>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hero-image"
                >
                    <img
                        src="https://thumbs.dreamstime.com/b/ai-doctor-providing-digital-health-services-via-holographic-interface-isometric-d-medical-illustration-powered-offering-389529610.jpg"
                        alt="AI Hospital Prediction"
                    />
                </motion.div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="about-section">
                <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    About Us
                </motion.h2>
                <p>
                    HealthPredict AI is an advanced AI-driven platform designed to empower hospitals in India to anticipate and manage patient surges effectively. During major festivals, seasonal pollution peaks, or epidemic outbreaks, healthcare centers often face unexpected pressure on resources and staff.<br/><br/>

Our intelligent system analyzes real-time patient data, environmental trends, and historical patterns to provide actionable insights. Hospitals can use these insights to optimize staffing schedules, allocate medical supplies efficiently, and issue timely patient advisories, ensuring better preparedness and seamless healthcare delivery.<br/><br/>

At HealthPredict AI, our mission is to enhance hospital efficiency, reduce patient wait times, and improve overall healthcare outcomes by leveraging the power of predictive analytics and AI. We aim to support the Indian healthcare system in delivering responsive, proactive, and data-driven care.
                </p>
            </section>

            {/* FEATURES SECTION */}
            <section id="features" className="features-section">
                <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Key Features
                </motion.h2>
                <div className="features-container">
                    <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                        <FaStethoscope size={50} color="#64FFDA" />
                        <h3>Predictive Analysis</h3>
                        <p>AI-driven algorithms to forecast patient inflow during critical periods.</p>
                    </motion.div>

                    <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                        <FaHeartbeat size={50} color="#64FFDA" />
                        <h3>Resource Optimization</h3>
                        <p>Smart insights for staffing, medicine inventory, and facility management.</p>
                    </motion.div>

                    <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                        <FaRobot size={50} color="#64FFDA" />
                        <h3>Agentic AI System</h3>
                        <p>Proactively recommends actions to reduce patient wait time and improve outcomes.</p>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="contact-section">
                <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Contact Us
                </motion.h2>
                <div className="contact-container">
                    <FaEnvelope size={50} color="#64FFDA" />
                    <p>Email: <a href="mailto:support@healthpredict.ai">support@healthpredict.ai</a></p>
                    <p>We’d love to hear from you. Reach out for collaborations or demos!</p>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <p>© 2025 HealthPredict AI. All rights reserved.</p>
            </footer>
        </div>
    );
}
