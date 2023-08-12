import "./App.css";
import React, { useState, useRef } from "react";
import logo from "./assets/images/logo_transparent.png";
import bgImage from "./assets/images/background1.jpg";
import ScoreDisplay from "./components/Score/ScoreDisplay";

function App() {
  const [score, setScore] = useState(null);
  const fileInputRef = useRef(null);

  const handleRetake = () => {
    setScore(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Company Logo" className="logo" />
      <div className="image-container">
        <img src={bgImage} alt="Background" className="image-background" />
        <div className="file-input-container">
          <input type="file" id="file" className="file-input" accept=".pdf,.doc,.docx" ref={fileInputRef} />
          <label htmlFor="file" className="upload-label">Upload Resume</label>
        </div>
        <div className="overlay"></div>
      </div>
      {score && <ScoreDisplay score={score} onRetake={handleRetake} />}
    </div>
  );
}

export default App;
