import { Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaWalking } from "react-icons/fa";
import { DatasetController } from "chart.js";

const ChangePassword = () => {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const proceed = () => {
    if (currentPass.length === 0) {
      setErrorMessage("Current password can't be empty!");
    } else if (newPass.length === 0) {
      setErrorMessage("New password can't be empty!");
    } else if (confirmNewPass.length === 0) {
      setErrorMessage("Confirm new password can't be empty!");
    }
    // else {
    //   const formData = new FormData();
    //   formData.append("type", type);
    //   formData.append("start_time", start_time);
    //   formData.append("end_time", end_time);
    //   formData.append("request_description", request_description);

    //   axios
    //     .post("http://127.0.0.1:8000/api/product/user/leave/create", formData)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3> Chnage Password</h3>
            <hr></hr>
          </center>
          {errorMessage && (
            <center>
              {" "}
              <div class="alert alert-danger col-8" role="alert">
                {errorMessage}
              </div>{" "}
            </center>
          )}
          {/* component */}
          <div className="row justify-content-center mt-3">
            <div className="col-10">
              <div className="container">
                <div className="text-left">
                  <Table striped bordered>
                    <tbody>
                      <tr>
                        <td clospan="3">Current Password</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="curr_pass"
                            onChange={(e) => setCurrentPass(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">New Password</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="new_pass"
                            onChange={(e) => setNewPass(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Confirm New Password</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="confiem_new_pass"
                            onChange={(e) => setConfirmNewPass(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" align="center">
                          <button
                            onClick={proceed}
                            class="btn btn-success"
                            style={{ width: "100%" }}
                          >
                            Proceed
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
