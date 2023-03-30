import React from "react";
import "./auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import { Col, Row } from "react-bootstrap";

function SignIn() {
  const [mount, setMount] = useState(true);
  const [hide, setHide] = useState("password");

const navigate = useNavigate()

  const handlelogin =() =>{
    localStorage.setItem("token","admin")
    navigate("/")
  }



  const showToggle = () => {
    if (hide === "password") {
      setHide("text");
      setMount(false);
    }
  };
  const hideToggle = () => {
    if (hide === "text") {
      setHide("password");
      setMount(true);
    }
  };

  console.log(mount);

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="align">
          <div className="login shadow-sm">
            <div className="container p-4">
              <h1 className="fw-normal fs-3">Login</h1>
              <p className="lead fw-lighter fs-6">
                Sign in to your account to continue
              </p>
              <div>
                <form className="form-box">
                  <div className="input-icons">
                    <i className="fa fa-envelope icon"></i>
                    <label className="pt-3 pb-2"> Username</label>
                    <input
                      className="input-field form-control"
                      type="text"
                      
                      placeholder="Username"
                    />
                  </div>

                  <div className="input-icons">
                    <i className="fa fa-key icon"></i>
                    {mount ? (
                      <i
                        className="fa-solid fa-eye-slash icon2"
                        onClick={showToggle}
                      ></i>
                    ) : (
                      <i class="fa-solid fa-eye icon2" onClick={hideToggle}></i>
                    )}
                    <label className="pt-3 pb-2">Password </label>
                    <label className="pt-3 pb-2  text ">
                      <NavLink
                        style={{ textDecoration: "none", color: "#00435e" }}
                        
                      >
                        Forget Password ?
                      </NavLink>
                    </label>
                    <input
                      className="input-field form-control"
                      id="myInput"
                      type={hide}
                      placeholder="Password"
                    />
                  </div>
                  <button onClick={handlelogin} className="btn bttn">Sign in</button>
                </form>
              </div>
              <div
                className="pt-5  mt-3 mb-5"
                style={{
                  width: "100%",
                  height: "7vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p className="m-0">New to Helvit,</p>
                <a
                  href="s"
                  className="m-0"
                  style={{ textDecoration: "none", color: "#00435e" }}
                >
                  Click here to Create a account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
