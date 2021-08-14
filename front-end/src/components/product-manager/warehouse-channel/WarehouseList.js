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
import { FaBox } from "react-icons/fa";

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

  const DataSet = [
    {
      columns: [
        {
          title: "Warehouse ID",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 25 },
        },
        {
          title: "Warehouse Name",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 25 },
        },
        {
          title: "Warehouse Description",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 25 },
        },
        {
          title: "Warehouse Address",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 25 },
        },
        {
          title: "Warehouse Initial Quantity",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 25 },
        },
        {
          title: "Warehouse Remaining Quantity",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 25 },
        },
        {
          title: "Warehouse Status",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 25 },
        },
        {
          title: "Date Added",
          style: { font: { sz: "18", bold: true } },
          width: { wch: 25 },
        },
      ],
      data: exportList.map((data) => [
        { value: data.warehouse_id, style: { font: { sz: "14" } } },
        { value: data.name, style: { font: { sz: "14" } } },
        { value: data.description, style: { font: { sz: "14" } } },
        { value: data.address, style: { font: { sz: "14" } } },
        { value: data.quantity, style: { font: { sz: "14" } } },
        { value: data.remaining_quantity, style: { font: { sz: "14" } } },
        { value: data.status, style: { font: { sz: "14" } } },
        { value: data.date_added, style: { font: { sz: "14" } } },
      ]),
    },
  ];

  function deleteWarehouse(id) {
    MySwal.fire({
      title: "Are You Sure?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteUrl = "http://127.0.0.1:8000/api/warehouse/delete/" + id;
        axios
          .delete(deleteUrl)
          .then((response) => {
            history.go(0);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  const searchWarehouse = () => {
    if (search.length === 0) {
      setErrorMessage("Please enter a Warehouse name!");
    } else {
      setLoading(true);
      const searchUrl = "http://127.0.0.1:8000/api/warehouse/search/" + search;
      let check = false;
      axios
        .get(searchUrl)
        .then((response) => {
          setList(response.data);
          setLoading(false);
          if (response.data.length === 0) {
            setErrorMessage("Warehouse not found!");
          } else {
            setErrorMessage("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>
              {" "}
              <FaBox></FaBox> Warehouse List
            </h3>
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
          {exportList.length !== 0 ? (
            <ExcelFile
              filename="Warehouse List"
              element={
                <center>
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{ marginLeft: "1000px", marginBottom: "20px" }}
                  >
                    Download
                  </button>
                </center>
              }
            >
              <ExcelSheet dataSet={DataSet} name="Warehouse List" />
            </ExcelFile>
          ) : null}
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
