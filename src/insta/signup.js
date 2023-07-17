import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./login.css";
// import { Alert } from "bootstrap";

export default function Signup() {
  const handlesignup = (event) => {
    event.preventDefault();
    var datastring = new FormData(event.target);
    var config = { Headers: { enctype: "multipart/form-data" } };

    axios
      .post("http://localhost:3000/Reg_signupdata", datastring, config)
      .then(function (response) {
        if (response.data.status === "error") {
          alert("Query error");
          window.location.reload();
        } else if (response.data.status === "success") {
          alert("successfully regiestered");
          window.location.href = "./signin";
        } else {
          alert("Contact Admin");
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
        <form onSubmit={handlesignup}>
          <div class="container">
            <div class="design">
              <div class="pill-1 rotate-45"></div>
              <div class="pill-2 rotate-45"></div>
              <div class="pill-3 rotate-45"></div>
              <div class="pill-4 rotate-45"></div>
            </div>
            <div class="login">
              <h3 class="title">Create your Account</h3>
              <div class="text-input">
                <i class="ri-user-fill"></i>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="text-input">
                <i class="ri-user-fill"></i>
                <input
                  type="text"
                  name="fathername"
                  id="fathername"
                  placeholder="Fathername"
                />
              </div>
              <div class="text-input">
                <i class="ri-user-fill"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="text-input">
                <i class="ri-lock-fill"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button
                class="login-btn"
                type="submit"
                name="data_submit"
                id="data_submit"
                value="submit"
              >
                SIGNUP
              </button>
              <div class="create1">
                <a href="/signin">Already have account</a>
                <i class="ri-arrow-right-fill"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
