import { Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const EditProfilePicture = () => {
  const history = useHistory();
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateProfilePicture = () => {
    const data = { image, password };
    console.log(data);
  };

  return (
    <>
      <div className="col-5 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Change Profile Picture</h3>
            <hr></hr>
          </center>
          {/* component */}
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="container">
                <div className="text-left">
                  {errorMessage && (
                    <center>
                      {" "}
                      <div class="alert alert-danger col-8" role="alert">
                        {errorMessage}
                      </div>{" "}
                    </center>
                  )}
                  <Table striped bordered>
                    <tbody>
                      <tr>
                        <td>Upload Image</td>
                        <td colSpan="2">
                          <input
                            type="file"
                            className="form-control"
                            name="profilePicture"
                            onChange={(e) => setImage(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>Current Password</td>
                        <td colSpan="2">
                          <input
                            type="text"
                            className="form-control"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" align="center">
                          <button
                            onClick={updateProfilePicture}
                            class="btn btn-success"
                            style={{ width: "100%" }}
                          >
                            Change
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
export default EditProfilePicture;
