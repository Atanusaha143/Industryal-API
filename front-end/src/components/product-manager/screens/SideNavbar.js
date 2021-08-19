import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <div className="col-12 col-lg-2 border border-dark bg-light rounded p-3">
        <div className="text-left mt-2 rounded">
          <h4>Products</h4>
          <Link
            to="/product/create"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            New Product
          </Link>{" "}
          <br></br>
          <Link to="/product/list" className="btn btn-outline-dark btn-sm mb-2">
            List
          </Link>{" "}
          <br></br>
          <Link
            to="/product/list/faulty"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Faulty Product
          </Link>{" "}
          <br></br>
          <Link
            to="/product/stocks"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Stocks
          </Link>{" "}
          <br></br>
          <Link
            to="/product/transfer"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Transfer Product
          </Link>{" "}
          <br></br>
          <Link
            to="/product/statistics"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Statistics
          </Link>
          <br></br>
          <Link
            to="/product/compare"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Compare
          </Link>
        </div>
        <hr></hr>
        <div className="text-left mt-2">
          <h4>Warehouse</h4>
          <Link
            to="/warehouse/create"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            New Warehouse
          </Link>{" "}
          <br></br>
          <Link
            to="/warehouse/list"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            List
          </Link>{" "}
          <br></br>
          <Link
            to="/warehouse/statistics"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Statistics
          </Link>
        </div>
        <hr></hr>
        <div className="text-left mt-2">
          <h4>Others</h4>
          <Link
            to="/product/user/leave"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Leave Requests
          </Link>{" "}
          <br></br>
          <Link
            to="/product/user/activities"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Activities
          </Link>{" "}
          <br></br>
          <Link
            to="/product/user/administration"
            className="btn btn-outline-dark btn-sm mb-2"
          >
            Administration
          </Link>
          <br></br>
          <Link to="/product/map" className="btn btn-outline-dark btn-sm mb-2">
            Map
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
