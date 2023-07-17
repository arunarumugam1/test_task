import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Get_data/")
      .then((responsive) => responsive.json())
      .then((json) => setGetdata(json));
  });

  const delete1 = (id) => {
    var key = { id };
    var value = { Headers: { enctype: "mutipart/form_data" } };

    axios
      .post("http://localhost:3000/Delete_data", key, value)
      .then(function (response) {
        if (response.data.status === "error") {
          alert("query error");
          window.location.reload();
        } else if (response.data.status === "deleted") {
          alert("deleted");
          window.location.reload();
        } else {
          alert("contact admin");
          window.location.reload();
        }
      });
  };
  return (
    <>
      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead>
            <tr className="text-center ">
              <th>id</th>
              <th>userame</th>
              <th>fathername</th>
              <th>Email</th>
              <th>password</th>
              <th>Reset</th>
            </tr>
          </thead>
          <tbody className="text-center text-dark">
            {getdata.map((v, i) => (
              <tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.fathername}</td>
                <td>{v.email}</td>
                {/* <td>{v.email}</td> */}
                <td>{v.password}</td>

                <td>
                  <Link to={"/update/" + v.id}>
                    <button type="submit"value="submit"className="btn btn-primary">edit</button>&nbsp;
                  </Link>
                  <button
                    type="button"
                    name="data_del"
                    id="data_del"
                    className="btn btn-danger"
                    onClick={() => {
                      delete1(v.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
