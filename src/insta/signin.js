import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./login.css";

export default function Signin() {
  const handlelogin = (event) => {
    event.preventDefault();
    var datastring = new FormData(event.target);
    var config = { Headers: { enctype: "multipart/form-data" } };

    axios
      .post("http://localhost:3000/Login_data", datastring, config)
      .then(function (response) {
        if (response.data.status === "error") {
          alert("query error");
          window.location.reload();
        } else if (response.data.status === "success") {
          let id = response.data.id;
          localStorage.setItem("id", id);
          alert("logined");
          window.location.href = "./dashboard";
        } else if (response.data.status === "invalid") {
          alert("Invalid username and password");
          window.location.reload();
        } else {
          alert("contact admin");
          window.location.reload();
        }
      })
      .catch(function (error) {
        if (error) {
          alert("Error");
          window.location.reload();
        }
      });
  };

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handlelogin}>
          <div class="container">
            <div class="design">
              <div class="pill-1 rotate-45"></div>
              <div class="pill-2 rotate-45"></div>
              <div class="pill-3 rotate-45"></div>
              <div class="pill-4 rotate-45"></div>
            </div>
            <div class="login">
              <h3 class="title">User Login</h3>
              <div class="text-input">
                <i class="ri-user-fill"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                />
              </div>
              <div class="text-input">
                <i class="ri-lock-fill"></i>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button class="login-btn">LOGIN</button>
              <a href="#" class="forgot">
                Forgot Username/Password?
              </a>
              <div class="create">
                <a href="/">Create Your Account</a>
                <i class="ri-arrow-right-fill"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
