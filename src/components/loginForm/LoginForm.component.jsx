import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { getToken, setUserSession } from "../../utils/utils";
import Logo from "../../assets/logo.png";
import { FaTimes } from "react-icons/fa";
// import history from "../../utils/history";
import { authContext } from "../../context/AuthContext";

import "./LoginForm.styles.css";

const LoginForm = ({ logAcc }) => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();
  const { login, isLoggenIn, setIsLoggenIn } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    setLoading(true);

    axios
      .post("https://inverterdev.herokuapp.com/auth/signin-admin", {
        username,
        password,
      })
      .then((res) => {
        setIsLoggenIn(true);
        localStorage.setItem("isLogin", true);
        login(res.data.token);
        console.log("4", isLoggenIn);
        navigate("/dashboard");
        setLoading(false);
      })
      .catch(() => {
        setErr(true);
        setLoading(false);
      });
  };
  return (
    <div className="loginForm">
      <div className="form-head">
        <img src={Logo} alt="Moon Innovation" />
        <h3>{logAcc}</h3>
        <Link to="/">
          <FaTimes className="timesFont" />
        </Link>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username"></label>
          <input
            type="text"
            ref={usernameRef}
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password"></label>
          <input
            type="password"
            ref={passwordRef}
            name="password"
            placeholder=".........."
            required
          />
        </div>
        {err && (
          <p style={{ color: "red", fontSize: "0.7rem" }}>
            ** Incorrect Username or Password, try again! **
          </p>
        )}
        <button>{!loading ? "Login" : "Loading..."}</button>
      </form>
    </div>
  );
};

export default LoginForm;
