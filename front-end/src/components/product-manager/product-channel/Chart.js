import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { FaTasks } from "react-icons/fa";

const Chart = () => {
  const history = useHistory();
  const [types, setTypes] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      history.push("/");
    } else {
      axios
        .get("http://127.0.0.1:8000/api/product/chart/pie")
        .then((response) => {
          setTypes(Object.keys(response.data));
          setCount(Object.values(response.data));
        });
    }
  }, []);

  const pieData = {
    labels: types,
    datasets: [
      {
        label: "Product VS Stock Pie Chart",
        data: count,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <div class="col-12 col-lg-9 border border-dark rounded p-3">
        <div class="container">
          <div class="row align-items-start">
            <div class="col"></div>
            <div class="col-6">
              <h3>&nbsp; &nbsp; Product Statistics</h3>
            </div>
            <div class="col-2"></div>
          </div>
          <hr class="mb-4"></hr>
          <div class="row justify-content-center mt-3">
            <div class="card w-100 bg-light text-dark border border-primary">
              <div class="card-header" align="center">
                <b>Product wise Count</b>
              </div>
              <div class="card-body">
                <center>
                  <div className="col-3 m-5">
                    <Pie data={pieData} />
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
