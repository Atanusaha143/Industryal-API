import Header from "../screens/Header";
import SideNavbar from "../screens/SideNavbar";
import Footer from "../screens/Footer";
import Dashboard from "./Dashboard";
import AddProduct from "../product-channel/AddProduct";
import ProductList from "../product-channel/ProductList";
import EditProduct from "../product-channel/EditProduct";
import FaultyProductList from "../product-channel/FaultyProductList";
import Stocks from "../product-channel/Stocks";
import AddWarehouse from "../warehouse-channel/AddWarehouse";
import WarehouseList from "../warehouse-channel/WarehouseList";
import EditWarehouse from "../warehouse-channel/EditWarehouse";
import LeaveRequest from "../other-channel/LeaveRequest";
import MyLeaveRequest from "../other-channel/MyLeaveRequest";
import ActivityList from "../other-channel/ActivityList";
import Administration from "../other-channel/Administration";
import MyAdministrationIssue from "../other-channel/MyAdministrationIssue";
import TransferProduct from "../product-channel/TransferProduct";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProfileSideNavbar from "../screens/ProfileSideNavbar";
import Profile from "../user-channel/Profile";

const Home = ({ title, nav }) => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <Header></Header>

      <br></br>
      <br></br>
      <br></br>

      <div>
        <div className="row mt-2 justify-content-around">
          {nav === "profile" ? (
            <ProfileSideNavbar></ProfileSideNavbar>
          ) : (
            <SideNavbar></SideNavbar>
          )}

          {(() => {
            if (title === "dashboard" && nav === "common") {
              return <Dashboard></Dashboard>;
            } else if (title === "add-product" && nav === "common") {
              return <AddProduct></AddProduct>;
            } else if (title === "product-list" && nav === "common") {
              return <ProductList></ProductList>;
            } else if (title === "product-edit" && nav === "common") {
              return <EditProduct></EditProduct>;
            } else if (title === "faulty-product-list" && nav === "common") {
              return <FaultyProductList></FaultyProductList>;
            } else if (title === "product-stocks" && nav === "common") {
              return <Stocks></Stocks>;
            } else if (title === "product-transfer" && nav === "common") {
              return <TransferProduct></TransferProduct>;
            } else if (title === "product-statistics" && nav === "common") {
              //return <ProductStatistics></ProductStatistics>;
            } else if (title === "add-warehouse" && nav === "common") {
              return <AddWarehouse></AddWarehouse>;
            } else if (title === "warehouse-list" && nav === "common") {
              return <WarehouseList></WarehouseList>;
            } else if (title === "warehouse-edit" && nav === "common") {
              return <EditWarehouse></EditWarehouse>;
            } else if (title === "warehouse-statistics" && nav === "common") {
              //return <WarehouseStatistics></WarehouseStatistics>;
            } else if (title === "user-leave" && nav === "common") {
              return <LeaveRequest></LeaveRequest>;
            } else if (title === "user-myLeave" && nav === "common") {
              return <MyLeaveRequest></MyLeaveRequest>;
            } else if (title === "user-activities" && nav === "common") {
              return <ActivityList></ActivityList>;
            } else if (title === "administration" && nav === "common") {
              return <Administration></Administration>;
            } else if (
              title === "administration-myIssues" &&
              nav === "common"
            ) {
              return <MyAdministrationIssue></MyAdministrationIssue>;
            } else if (title === "profile" && nav === "profile") {
              return <Profile></Profile>;
            }
          })()}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
