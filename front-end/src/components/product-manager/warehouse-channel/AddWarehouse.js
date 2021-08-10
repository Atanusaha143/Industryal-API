import { Table } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AddWarehouse = () => {
  const [warehouse_id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");

  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Add Warehouse</h3>
          </center>
          <hr></hr>
          {/* component */}
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="container">
                <div className="text-left">
                  <Table striped bordered>
                    <tbody>
                      <tr>
                        <td>Id</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            name="warehouse_id"
                            onChange={(e) => setId(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Name</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="warehouse_name"
                            onChange={(e) => setName(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Description</td>
                        <td colspan="3">
                          <textarea
                            id=""
                            cols="50"
                            rows="2"
                            class="form-control"
                            name="warehouse_description"
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Address</td>
                        <td colspan="3">
                          <textarea
                            name="warehouse_address"
                            id=""
                            cols="20"
                            rows="1"
                            class="form-control"
                            onChange={(e) => setAddress(e.target.value)}
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Zip Code</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="warehouse_zip_code"
                            onChange={(e) => setZipCode(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">City</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="warehouse_city"
                            onChange={(e) => setCity(e.target.value)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Country</td>
                        <td clospan="3">
                          <select
                            class="form-control"
                            id="warehouse"
                            name="warehouse_country"
                            onChange={(e) => setCountry(e.target.value)}
                          >
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Japan">Japan</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Singapore">Singapore</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Phone</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="warehouse_phone"
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>Status</td>
                        <td>
                          <select
                            class="form-control"
                            id="warehouse"
                            name="warehouse_status"
                          >
                            <option>Open</option>
                            <option>Closed</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Quantity</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="warehouse_quantity"
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" align="center">
                          <input
                            type="submit"
                            class="btn btn-success"
                            value="Create"
                            style={{ width: "100%" }}
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

export default AddWarehouse;
