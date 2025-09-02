import { useState } from "react";
import reactLogo from "../assets/logo.svg";
import LoginForm from "./LoginForm";
import { MOCK_USERS } from "../data/users";
import "./login.css";

const LoginPage = () => {
  const [loginSuccess, setLoginSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    setErrorMessage("");
    setLoginSuccess("");

    const validUser = MOCK_USERS.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      setLoginSuccess(`LOGIN SUCCESSFUL`);
      setIsLoggedIn(true);
    } else {
      setErrorMessage("Invalid credentials, please try again.");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="success-container">
        <h1 className="login-success">{loginSuccess}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1 className="login-title">KONAMI CODERS</h1>
      <LoginForm onSubmit={handleLogin} errorMessage={errorMessage} />
      <a className="forgot-pass" href="/forgot-password">
        forgot password?
      </a>
    </div>
  );
};

export default LoginPage;