import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import axios from "axios";

const ProductList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const deleteProduct = () => {};

  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Product List</h3>
          </center>
          <hr></hr>
          {/* component */}
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="container">
                <div className="text-left">
                  <form method="POST" enctype="multipart/form-data">
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
                                  to={`/employee/edit/${product.product_id}`}
                                  className="btn btn-warning mx-3"
                                >
                                  {" "}
                                  Edit{" "}
                                </Link>
                                <br></br>
                                <button
                                  onClick={() =>
                                    deleteProduct(product.product_id)
                                  }
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
                  </form>
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
