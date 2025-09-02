import { useState, useEffect } from "react";
import reactLogo from "../assets/logo.svg";
import LoginForm from "./LoginForm";
import TaskPage from "../Task/TaskPage";
import { MOCK_USERS } from "../data/users";
import "./login.css";

const LoginPage = () => {
  const [loginSuccess, setLoginSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTaskPage, setShowTaskPage] = useState(false);

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

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        setShowTaskPage(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  if (showTaskPage) {
    return <TaskPage />;
  }

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