/* eslint-disable */

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaStethoscope, FaHeartbeat, FaRobot, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
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
                    <h1>Empowering Hospitals with AI-Driven Foresight</h1>
                    <TypeAnimation
                        sequence={[
                            "Predict patient surges before they happen 🏥",
                            2000,
                            "Optimize staff and supplies intelligently ⚙️",
                            2000,
                            "Ensure patient care never falls behind 💙",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="typewriter"
                    />
                    <p>
                        HealthPredict AI helps hospitals anticipate challenges and respond proactively during high-demand seasons — ensuring every patient gets timely care.
                    </p>
                    <div className="cta-group">
                        <button className="cta-btn" onClick={() => navigate("/auth")}>Get Started</button>
                        <button className="secondary-btn" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                            Learn More
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hero-image"
                >
                    <img
                        src="https://pub-e93d5c9fdf134c89830082377f6df465.r2.dev/2024/12/AI-in-Healthcare-edited.webp"
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
                <div className="about-grid">
                    <motion.div whileHover={{ scale: 1.03 }} className="about-card">
                        <FaRobot size={40} color="#64FFDA" />
                        <h4>AI-Powered Insights</h4>
                        <p>Our system reads live hospital and environmental data to forecast patient surges.</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} className="about-card">
                        <FaHeartbeat size={40} color="#64FFDA" />
                        <h4>Smarter Resource Planning</h4>
                        <p>Automate staffing and supply decisions using predictive analytics and historical patterns.</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} className="about-card">
                        <FaStethoscope size={40} color="#64FFDA" />
                        <h4>Proactive Healthcare</h4>
                        <p>Enable hospitals to act before crises — reducing wait times and improving patient trust.</p>
                    </motion.div>
                </div>
                <p className="about-footer">
                    Together, we’re building a future where data intelligence meets compassionate healthcare.
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
                    <motion.div className="feature-card" whileHover={{ y: -8, scale: 1.03 }}>
                        <FaStethoscope className="icons" size={50} color="#64FFDA" />
                        <h3>Predictive Analysis</h3>
                        <p>Forecast patient inflow before surges hit, ensuring hospitals stay prepared — not panicked.</p>
                    </motion.div>

                    <motion.div className="feature-card" whileHover={{ y: -8, scale: 1.03 }}>
                        <FaHeartbeat className="icons" size={50} color="#64FFDA" />
                        <h3>Resource Optimization</h3>
                        <p>Smart insights for staffing, medicine inventory, and facility management.</p>
                    </motion.div>

                    <motion.div className="feature-card" whileHover={{ y: -8, scale: 1.03 }}>
                        <FaRobot className="icons" size={50} color="#64FFDA" />
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
                    <FaEnvelope className="icons" size={50} color="#64FFDA" />
                    <p>Email: <a href="mailto:support@healthpredict.ai">support@healthpredict.ai</a></p>
                    <p>We’d love to hear from you. Reach out for collaborations or demos!</p>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="3"></textarea>
                    <button className="cta-btn">Send Message</button>
                </form>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <hr className="footer-divider" />
                <p>© 2025 HealthPredict AI | Built for Smarter Healthcare</p>
                <div className="social-icons">
                    <FaEnvelope size={20} color="#64FFDA" />
                    <FaRobot size={20} color="#64FFDA" />
                </div>
            </footer>
        </div>
    );
}
