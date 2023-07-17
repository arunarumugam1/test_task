import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./login.css";
import { useParams } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [fathername, setFathername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/Get_update/" + id)
      .then((response) => response.json())
      .then(function (res) {
        setName(res[0].name);
        setFathername(res[0].fathername);
        setEmail(res[0].email);
        setPassword(res[0].password);
      })
      .catch(function (error) {
        alert(error);
        window.location.reload();
      });
  }, []);

  const handleupdate = async (event) => {
    event.preventDefault();
    var datastring = new FormData(event.target);
    var config = { Headers: { enctype: "multipart/form-data" } };

    await axios
      .put("http://localhost:3000/Update_data/" + id + "", datastring, config)
      .then(function (response) {
        if (response.data.status === "error") {
          alert("query error");
          window.location.href = "/";
        } else if (response.data.status === "success") {
          alert("successfully regiestered");
          window.location.href = "/dashboard";
        } else {
          alert("conact admin");
          window.location.href = "/";
        }
      })

      .catch(function (error) {
        if (error) {
          alert("Error");
          window.location.href = "/";
        }
      });
  };
  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleupdate}>
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
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="text-input">
                <i class="ri-user-fill"></i>
                <input
                  type="text"
                  name="fathername"
                  id="fathername"
                  placeholder="Fathername"
                  value={fathername}
                  onChange={(e) => setFathername(e.target.value)}
                />
              </div>
              <div class="text-input">
                <i class="ri-user-fill"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="text-input">
                <i class="ri-lock-fill"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <a href="/Login">Already have account</a>
                <i class="ri-arrow-right-fill"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
