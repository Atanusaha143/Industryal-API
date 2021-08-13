import "./components/product-manager/assets/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/product-manager/home/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Product */}
          <Route exact path="/product">
            <Home title="dashboard" nav="common" />
          </Route>
          <Route exact path="/product/create">
            <Home title="add-product" nav="common" />
          </Route>
          <Route exact path="/product/list">
            <Home title="product-list" nav="common" />
          </Route>
          <Route exact path="/product/edit/:id">
            <Home title="product-edit" nav="common" />
          </Route>
          <Route exact path="/product/list/faulty">
            <Home title="faulty-product-list" nav="common" />
          </Route>
          <Route exact path="/product/stocks">
            <Home title="product-stocks" nav="common" />
          </Route>
          <Route exact path="/product/transfer">
            <Home title="product-transfer" nav="common" />
          </Route>

          {/* Warehouse */}
          <Route exact path="/warehouse/create">
            <Home title="add-warehouse" nav="common" />
          </Route>
          <Route exact path="/warehouse/list">
            <Home title="warehouse-list" nav="common" />
          </Route>
          <Route exact path="/warehouse/edit/:id">
            <Home title="warehouse-edit" nav="common" />
          </Route>

          {/* Other */}
          <Route exact path="/product/user/leave">
            <Home title="user-leave" nav="common" />
          </Route>
          <Route exact path="/product/user/leave/myrequest">
            <Home title="user-myLeave" nav="common" />
          </Route>
          <Route exact path="/product/user/activities">
            <Home title="user-activities" nav="common" />
          </Route>
          <Route exact path="/product/user/administration">
            <Home title="administration" nav="common" />
          </Route>
          <Route exact path="/product/user/administration/myissue">
            <Home title="administration-myIssues" nav="common" />
          </Route>

          {/* User */}
          <Route exact path="/product/user/profile">
            <Home title="profile" nav="profile" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
