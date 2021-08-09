import { Table } from "react-bootstrap";

const AddProduct = () => {
  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Add Product</h3>
          </center>
          <hr></hr>
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="container">
                <div className="text-left">
                  <form method="POST" enctype="multipart/form-data">
                    <Table striped bordered>
                      <tbody>
                        <tr>
                          <td>Id</td>
                          <td colSpan="2">
                            <input
                              type="text"
                              className="form-control"
                              name="product_id"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td colSpan="2">
                            <input
                              type="text"
                              className="form-control"
                              name="product_name"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>Status (Sell)</td>
                          <td colSpan="2">
                            <select
                              className="form-control"
                              name="product_sell_status"
                            >
                              <option>For sell</option>
                              <option>Not for sell</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Status (Purchase)</td>
                          <td colSpan="2">
                            <select
                              className="form-control"
                              name="product_purchase_status"
                            >
                              <option>For Purchase</option>
                              <option>Not for purchase</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td colSpan="2">
                            <textarea
                              type="text"
                              name="product_description"
                              id=""
                              class="form-control"
                            ></textarea>
                          </td>
                        </tr>
                        <tr>
                          <td>Warehouse</td>
                          <td colSpan="2">
                            <select
                              className="form-control"
                              name="warehouse_name"
                            >
                              <option>Warehouse 1</option>
                              <option>Warehouse 2</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Stock</td>
                          <td colSpan="2">
                            <input
                              type="text"
                              class="form-control"
                              name="product_stock"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>Nature of product</td>
                          <td colspan="2">
                            <select class="form-control" name="product_nature">
                              <option>Manufactired Product</option>
                              <option>Raw Material</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td>
                            <input
                              type="text"
                              class="form-control"
                              name="product_weight"
                            ></input>
                          </td>
                          <td>
                            <select
                              class="form-control"
                              name="product_weight_unit"
                            >
                              <option>kilogram</option>
                              <option>gram</option>
                              <option>tonne</option>
                              <option>mg</option>
                              <option>ounce</option>
                              <option>pound</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Length x Width x Height</td>
                          <td>
                            <input
                              type="text"
                              class="form-control"
                              name="product_dimention"
                            ></input>
                          </td>
                          <td>
                            <select
                              class="form-control"
                              name="product_dimention_unit"
                            >
                              <option>m</option>
                              <option>dm</option>
                              <option>cm</option>
                              <option>mm</option>
                              <option>foot</option>
                              <option>inch</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Selling Price</td>
                          <td>
                            <input
                              type="number"
                              class="form-control"
                              name="product_selling_price"
                            ></input>
                          </td>
                          <td>
                            <select
                              class="form-control"
                              name="product_selling_tax"
                            >
                              <option>Excluding Tax</option>
                              <option>Including Tax</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Upload Image: </td>
                          <td colspan="2">
                            <input type="file" name="product_image"></input>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="3" align="center">
                            <input
                              type="submit"
                              class="btn btn-success"
                              value="Create"
                              style={{ width: "400px" }}
                            ></input>
                          </td>
                        </tr>
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

export default AddProduct;
