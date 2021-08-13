import { Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const EditProfile = () => {
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    axios
      .get(
        "http://127.0.0.1:8000/api/product/user/profile/" +
          localStorage.getItem("username")
      )
      .then(function (response) {
        setUserInfo(response.data);
        setLoading(false);
      });
  }, []);

  const override = `
  display: flex;
  align-items: center;
  justify-content: center;    
  border-color: red;
`;

  return (
    <>
      <div className="col-5 col-lg-9 border border-dark rounded p-3">
        <div className="row justify-content-center">
          <center>
            <h3>Edit Profile</h3>
            <hr></hr>
          </center>
          {/* component */}
        </div>
      </div>
    </>
  );
};
export default EditProfile;
