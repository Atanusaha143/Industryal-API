import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileSideNavbar = () => {
  return (
    <>
      <div className="col-12 col-lg-2 border border-dark bg-light rounded p-3">
        <div className="text-left mt-2 rounded">
          <Link to="/product/create" className="btn btn-primary btn-sm mb-2">
            Edit Profile
          </Link>{" "}
          <br></br>
          <Link to="/product/list" className="btn btn-warning btn-sm mb-2">
            Changed Profile Picture
          </Link>{" "}
          <br></br>
          <Link
            to="/product/list/faulty"
            className="btn btn-danger btn-sm mb-2"
          >
            Change Password
          </Link>{" "}
          <br></br>
        </div>
      </div>
    </>
  );
};

export default ProfileSideNavbar;
