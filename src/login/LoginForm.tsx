import React, { useState } from "react";
import "./login.css";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  errorMessage: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, errorMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);

    setUsername("");
    setPassword("");
  };

  return (
    <>
      {errorMessage && <p className="error">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="user-form">
        <div>
          <input
            type="text"
            id="username"
            className="username-input"
            value={username}
            placeholder="Username"
            aria-label="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            className="password-input"
            value={password}
            placeholder="Password"
            aria-label="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="sign-in-btn">
          SIGN IN
        </button>
      </form>
    </>
  );
};

export default LoginForm;