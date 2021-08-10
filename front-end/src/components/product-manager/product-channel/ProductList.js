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

const ProductList = () => {
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(async () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/product/list")
      .then(function (response) {
        setList(response.data);
        setLoading(false);
      });
  }, []);

  const override = `
  display: flex;
  align-items: center;
  justify-content: center;    
  border-color: red;
`;

  function deleteEmployee(id) {
    MySwal.fire({
      title: "Are You Sure?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteUrl = "http://127.0.0.1:8000/api/product/delete/" + id;
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

  const searchProduct = () => {
    setLoading(true);
    const searchUrl = "http://127.0.0.1:8000/api/product/search/" + search;
    let check = false;
    axios
      .get(searchUrl)
      .then((response) => {
        setList(response.data);
        setLoading(false);
        if (response.data.length === 0) {
          setErrorMessage("Product not found!");
        } else {
          setErrorMessage("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            placeholder="Search By Product Name..."
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="btn btn-outline-primary mt-3"
            style={{ width: "10%", height: "5%", marginLeft: "20px" }}
            onClick={() => searchProduct()}
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
                        <th>Status</th>
                        <th>Product Nature</th>
                        <th>Selling Price</th>
                        <th>Description</th>
                        <th>Image</th>
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
                        list.map((product) => (
                          <tr>
                            <td>{product.product_id}</td>
                            <td>{product.product_name}</td>
                            <td>
                              {product.status_sell} <br></br>
                              {product.status_purchase}
                            </td>
                            <td>{product.nature}</td>
                            <td>{product.selling_price}</td>
                            <td>{product.product_description}</td>
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
                            <td>{product.product_condition}</td>
                            <td>
                              <Link
                                to={`/product/edit/${product.id}`}
                                className="btn btn-warning mx-3"
                              >
                                Edit
                              </Link>
                              <br></br>
                              <button
                                onClick={() => deleteEmployee(product.id)}
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

export default ProductList;
