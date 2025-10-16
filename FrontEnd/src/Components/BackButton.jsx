import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium bg-slate-800/70 px-3 py-2 rounded-xl shadow-md backdrop-blur-sm z-50"
    >
      <ArrowLeft size={18} />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;
