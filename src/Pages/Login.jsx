import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "../index.css";
import { NavLink } from "react-router-dom";
import imggg from "../../public/najot.jpg";
import { FaRegUser } from "react-icons/fa6";

import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  function validate() {
    if (usernameRef.current.value.length < 3) {
      alert("username is not valid");
      usernameRef.current.focus();
      usernameRef.current.style.outlineColor = "red";
      return false;
    }

    return true;
  }

  function handlLogin(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return false;
    }

    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data.message == "User Not found." ||
          data.message == "Invalid Password!"
        ) {
          alert(data.message);
        }
        if (data.id) {
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/Home");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="body">
      <form className="form">
        <div className="logof">
          <img className="imggg" src={imggg} alt="" />
          <h2>Admin paneli</h2>
        </div>
        <div className="allin">
        <FaRegUser />


          <input
            className="input"
            ref={usernameRef}
            placeholder="Enter name..."
            type="text"
          />
        </div>
        <div className="allin">
          <RiLockPasswordFill />

          <input
            className="input"
            ref={passwordRef}
            placeholder="Enter password..."
            type="password"
          />
        </div>
        <button className="button" onClick={handlLogin}>
          Kirish
        </button>
        <NavLink to="/register">
          <h3 className="h3">Registerga otish</h3>
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
