import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Administration = () => {
  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Dashboard</h3>
          </center>
          {/* component */}
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="container">
                <div className="text-left">
                  <Table striped bordered>
                    <tbody>
                      <tr>
                        <td>Issue Name</td>
                        <td>
                          <input
                            type="text"
                            name="issue_name"
                            class="form-control"
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>Message</td>
                        <td>
                          <textarea
                            type="text"
                            name="message"
                            id=""
                            class="form-control"
                          >
                            {" "}
                          </textarea>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" align="center">
                          <input
                            type="submit"
                            class="btn btn-success"
                            value="Send"
                            style={{ width: "400px" }}
                          ></input>
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

export default Administration;
