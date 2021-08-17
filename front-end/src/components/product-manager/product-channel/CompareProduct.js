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
import { BiGitCompare } from "react-icons/bi";

const CompareProduct = () => {
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const [productNames, setProductNames] = useState([]);
  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [product1Deatils, setProduct1Details] = useState([]);
  const [product2Deatils, setProduct2Details] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(async () => {
    document.title = "Activity List";
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/product/list/names")
      .then(function (response) {
        setProductNames(response.data);
      });
  }, []);

  const override = `
  display: flex;
  align-items: center;
  justify-content: center;    
  border-color: red;
`;

  const product_1 = () => {
    axios
      .get("http://127.0.0.1:8000/api/product/search/" + product1)
      .then(function (response) {
        console.log(response.data[0]);
        setProduct1Details(response.data);
      });
  };
  const product_2 = () => {
    axios
      .get("http://127.0.0.1:8000/api/product/search/" + product2)
      .then(function (response) {
        console.log(response.data[0]);
        setProduct2Details(response.data);
      });
  };

  return (
    <>
      <div className="col-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>
              {" "}
              <BiGitCompare></BiGitCompare> Compare Product
            </h3>
          </center>
          <hr></hr>
          {errorMessage && (
            <center>
              {" "}
              <div class="alert alert-danger col-8" role="alert">
                {errorMessage}
              </div>{" "}
            </center>
          )}
          {/* component */}
          <div class="container mt-4">
            <div class="row">
              <div class="col-6">
                <select
                  className="form-select"
                  name="product_1"
                  onChange={(e) => setProduct1(e.target.value)}
                  onClick={product_1}
                >
                  <option disabled selected>
                    Select a product
                  </option>
                  {productNames.map((pName) => (
                    <option>{pName}</option>
                  ))}
                </select>
                {product1Deatils.length !== 0 ? (
                  <div className="border border-primary mt-4">
                    {product1Deatils.map((product) => (
                      <Table striped bordered>
                        <tbody>
                          <tr>
                            <td>
                              <b>ID</b>
                            </td>
                            <td>{product.product_id}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Name</b>
                            </td>
                            <td>{product.product_name}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Status</b>
                            </td>
                            <td>
                              {product.status_sell} <br></br>
                              {product.status_purchase}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Nature</b>
                            </td>
                            <td>{product.nature}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Selling Price</b>
                            </td>
                            <td>{product.selling_price}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Description</b>
                            </td>
                            <td>{product.product_description}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Condition</b>
                            </td>
                            <td>{product.product_condition}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Image</b>
                            </td>
                            <td>
                              <img
                                src={
                                  "http://localhost:8000/upload/Product/" +
                                  product.image
                                }
                                width="200"
                                height="200"
                                alt="Product_Photo"
                              ></img>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    ))}
                  </div>
                ) : null}
              </div>

              <div class="col-6">
                <select
                  className="form-select"
                  name="product_1"
                  onChange={(e) => setProduct2(e.target.value)}
                  onClick={product_2}
                >
                  <option disabled selected>
                    Select a product
                  </option>
                  {productNames.map((pName) => (
                    <option>{pName}</option>
                  ))}
                </select>
                {product2Deatils.length !== 0 ? (
                  <div className="border border-primary mt-4">
                    {product2Deatils.map((product) => (
                      <Table striped bordered>
                        <tbody>
                          <tr>
                            <td>
                              <b>ID</b>
                            </td>
                            <td>{product.product_id}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Name</b>
                            </td>
                            <td>{product.product_name}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Status</b>
                            </td>
                            <td>
                              {product.status_sell} <br></br>
                              {product.status_purchase}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Nature</b>
                            </td>
                            <td>{product.nature}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Selling Price</b>
                            </td>
                            <td>{product.selling_price}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Description</b>
                            </td>
                            <td>{product.product_description}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Condition</b>
                            </td>
                            <td>{product.product_condition}</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Image</b>
                            </td>
                            <td>
                              <img
                                src={
                                  "http://localhost:8000/upload/Product/" +
                                  product.image
                                }
                                width="200"
                                height="200"
                                alt="Product_Photo"
                              ></img>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
