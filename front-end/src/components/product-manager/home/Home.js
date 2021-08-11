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

const Home = ({ title }) => {
  return (
    <>
      <Header></Header>

      <br></br>
      <br></br>
      <br></br>

      <div>
        <div className="row mt-2 justify-content-around">
          <SideNavbar></SideNavbar>

          {(() => {
            if (title === "dashboard") {
              return <Dashboard></Dashboard>;
            } else if (title === "add-product") {
              return <AddProduct></AddProduct>;
            } else if (title === "product-list") {
              return <ProductList></ProductList>;
            } else if (title === "product-edit") {
              return <EditProduct></EditProduct>;
            } else if (title === "faulty-product-list") {
              return <FaultyProductList></FaultyProductList>;
            } else if (title === "product-stocks") {
              return <Stocks></Stocks>;
            } else if (title === "transfer-product") {
              //return <Transfer></Transfer>;
            } else if (title === "product-statistics") {
              //return <ProductStatistics></ProductStatistics>;
            } else if (title === "add-warehouse") {
              return <AddWarehouse></AddWarehouse>;
            } else if (title === "warehouse-list") {
              return <WarehouseList></WarehouseList>;
            } else if (title === "warehouse-edit") {
              return <EditWarehouse></EditWarehouse>;
            } else if (title === "warehouse-statistics") {
              //return <WarehouseStatistics></WarehouseStatistics>;
            } else if (title === "user-leave") {
              return <LeaveRequest></LeaveRequest>;
            } else if (title === "user-myLeave") {
              return <MyLeaveRequest></MyLeaveRequest>;
            } else if (title === "user-activities") {
              return <ActivityList></ActivityList>;
            } else if (title === "administration") {
              //return <Administration></Administration>;
            }
          })()}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
