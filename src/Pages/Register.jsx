import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "./Register.css";
import img from "../../public/najot.jpg";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function validate() {
    if (usernameRef.current.value.length < 3) {
      alert("username is not valid");
      usernameRef.current.focus();
      usernameRef.current.style.outlineColor = "red";
      return false;
    }
    if (!validateEmail(emailRef.current.value)) {
      alert("Email is not valid");
      emailRef.current.focus();
      emailRef.current.style.outlineColor = "red";
      return false;
    }
    if (rePasswordRef.current.value != passwordRef.current.value) {
      alert("rePassword is not valid");
      return false;
    }

    return true;
  }

  function handleRegister(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return false;
    }

    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "User registered successfully!") {
          navigate("/login");
        }

        if (
          data.message == "Failed! Username is already in use!" ||
          data.message == "Failed! Email is already in use!"
        ) {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="body">
      <form className="form">
        <div className="imgdiv">
          <img className="imge" src={img} alt="" />
          <h4>Ro'yxadan o'tish</h4>
        </div>
        <div className="allin">
          <FaRegUser />

          <input
            className="inputr"
            ref={usernameRef}
            placeholder="Enter name..."
            type="text"
          />
        </div>
        <div className="allin">
          <MdEmail />

          <input
            className="inputr"
            ref={emailRef}
            placeholder="Enter email..."
            type="email"
          />
        </div>
        <div className="allin">
          <RiLockPasswordFill />

          <input
            className="inputr"
            ref={passwordRef}
            placeholder="Password..."
            type="password"
          />
        </div>
        <div className="allin">
          <RiLockPasswordFill />

          <input
            className="inputr"
            ref={rePasswordRef}
            placeholder="RePassword..."
            type="password"
          />
        </div>
        <button className="button" onClick={handleRegister}>
          Ro`yxatdan o`tish
        </button>
        <NavLink to="/login">
          <h3 className="h3">Loginnga o`tish</h3>
        </NavLink>
      </form>
    </div>
  );
}

export default Register;
