import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeaveRequest = () => {
  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Leave Request</h3>
            <hr></hr>
          </center>
          {/* component */}
          <div className="row justify-content-center mt-3">
            <div className="col-10">
              <div className="container">
                <div className="text-left">
                  <Table striped bordered>
                    <tbody>
                      <tr>
                        <td clospan="3">Type</td>
                        <td clospan="3">
                          <select class="form-control" name="leave_type">
                            <option>Sick leave</option>
                            <option>Other leave</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Start date</td>
                        <td clospan="3">
                          <input
                            type="date"
                            class="form-control"
                            name="leave_start_date"
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">End date</td>
                        <td clospan="3">
                          <input
                            type="date"
                            class="form-control"
                            name="leave_end_date"
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Description</td>
                        <td colspan="3">
                          <textarea
                            type="text"
                            name="leave_description"
                            id=""
                            class="form-control"
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" align="center">
                          <input
                            type="submit"
                            class="btn btn-success"
                            value="Request"
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

export default LeaveRequest;
