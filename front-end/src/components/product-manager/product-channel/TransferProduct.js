import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TransferProduct = () => {
  return (
    <>
      <div className="col-12 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Transfer Product</h3>
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
                        <td>Id</td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            name="product_id"
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3"> New Warehouse</td>
                        <td clospan="3">
                          <select class="form-control" name="warehouse">
                            <option>Warehouse 1</option>
                            <option>Warehouse 2</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td clospan="3">Quantity</td>
                        <td clospan="3">
                          <input
                            type="text"
                            class="form-control"
                            name="product_quantity"
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" align="center">
                          <input
                            type="submit"
                            class="btn btn-danger"
                            value="Transfer"
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

export default TransferProduct;
