import React, { useState } from "react";
import "./App.css";


function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleNext = () => {
    if (email) {
      setStep(2);
    } else {
      alert("Please enter your email!");
    }
  };

  const handleBack = () => {
    setStep(1);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      {step === 1 ? (
        <div className="card">
         
          
          
          <div className="heading-section">
            <h1 className="heading">Sign in</h1>
            <h1 className="subheading">To continue to Gmail</h1>
          </div>
    
          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <a href="#" className="forgot-link">
            Forgot email?
          </a>
          <button onClick={handleNext} className="button">
            Next
          </button>
          
          <a href="#" className="create-account">
            Create account
          </a>
        </div>
      ) : (
        <div className="card">
          
          <h1 className="heading">{email.split("")}</h1>
        
          <input
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)} 
            />
            <label htmlFor="showPassword">Show password</label>
          </div>
          <button onClick={handleBack} className="button">
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;