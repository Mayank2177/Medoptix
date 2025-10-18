/* eslint-disable */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react";
import { app } from "../Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      let userCredential;

      if (isLogin) {
        // 🔹 Login user
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Login successful!");
      } else {
        // 🔹 Signup user (Name not sent to Firebase)
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("✅ Signup successful!");
      }

      // 🔹 Save user locally
      const userData = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: name || "User", // only for demo
      };

      localStorage.setItem("user", JSON.stringify(userData));

      // 🔹 Redirect to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("❌ Auth error:", error.message);
      alert("Authentication failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#06101d] to-[#091a2e] text-white font-inter relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-400/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Auth Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[400px] bg-[#0d1b2a]/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#1f4068]/40 p-8 z-10"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-teal-300">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          {isLogin
            ? "Login to continue to HealthPredict AI"
            : "Join HealthPredict AI and start predicting smarter"}
        </p>

        <form onSubmit={handleAuth} className="flex flex-col space-y-4">
          {!isLogin && (
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#112240] border border-[#1f4068]/60 rounded-lg px-4 py-2 mt-1 text-gray-100 focus:ring-2 focus:ring-teal-400 outline-none transition-all"
                required
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-[#112240] border border-[#1f4068]/60 rounded-lg px-4 py-2 mt-1 text-gray-100 focus:ring-2 focus:ring-teal-400 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-[#112240] border border-[#1f4068]/60 rounded-lg px-4 py-2 mt-1 text-gray-100 focus:ring-2 focus:ring-teal-400 outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-black font-semibold py-2 rounded-xl transition-all"
          >
            {isLogin ? <LogIn size={18} /> : <UserPlus size={18} />}
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch link */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-teal-300 cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-teal-300 cursor-pointer hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Log in
              </span>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
