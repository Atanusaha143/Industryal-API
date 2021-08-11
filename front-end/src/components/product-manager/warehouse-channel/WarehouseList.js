import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const WarehouseList = () => {
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const [list, setList] = useState([]);
  const [exportList, setExportList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(async () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/warehouse/list")
      .then(function (response) {
        setList(response.data);
        setExportList(response.data);
        setLoading(false);
      });
  }, []);

  const override = `
  display: flex;
  align-items: center;
  justify-content: center;    
  border-color: red;
`;

  function deleteWarehouse(id) {}

  const searchWarehouse = () => {};

  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Product List</h3>
          </center>
          <hr></hr>
          <input
            type="text"
            className="form-control mt-3 mb-5"
            style={{ width: "50%" }}
            placeholder="Search By Warehouse Name..."
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="btn btn-outline-primary mt-3"
            style={{ width: "10%", height: "5%", marginLeft: "20px" }}
            onClick={() => searchWarehouse()}
          >
            Search
          </button>
          {errorMessage && (
            <center>
              {" "}
              <div class="alert alert-danger col-8" role="alert">
                {errorMessage}
              </div>{" "}
            </center>
          )}
          {/* component */}
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="container">
                <div className="text-left">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Address</th>
                        <th>Total Quantity</th>
                        <th>Remaining Quantity</th>
                        <th>Status</th>
                        <th>Condition</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.length === 0 ? (
                        <tr>
                          <td colSpan="10">
                            <ScaleLoader
                              css={override}
                              size={150}
                              color={"#eb4034"}
                              loading={loading}
                            />
                          </td>
                        </tr>
                      ) : (
                        list.map((warehouse) => (
                          <tr>
                            <td>{warehouse.warehouse_id}</td>
                            <td>{warehouse.name}</td>
                            <td>{warehouse.description}</td>
                            <td>{warehouse.address}</td>
                            <td>{warehouse.quantity}</td>
                            <td>{warehouse.remaining_quantity}</td>
                            <td>{warehouse.status}</td>
                            <td>
                              {warehouse.remaining_quantity !== 0 ? (
                                <b className="text-success">In Stock</b>
                              ) : (
                                <b className="text-danger">Out of Stock</b>
                              )}
                            </td>
                            <td>
                              <Link
                                to={`/warehouse/edit/${warehouse.id}`}
                                className="btn btn-warning mx-3"
                              >
                                Edit
                              </Link>
                              <br></br>
                              <button
                                onClick={() => deleteWarehouse(warehouse.id)}
                                className="btn btn-danger mt-2"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
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

export default WarehouseList;
