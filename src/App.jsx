import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    } else {
      if (!location.pathname.includes("register")) {
        navigate("/login");
      }
    }
  }, []);

  function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
      navigate("/register");
    }
    return children;
  }

  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={!!token}>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <ProtectedRoute isAuthenticated={!!token}>
              <About />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
