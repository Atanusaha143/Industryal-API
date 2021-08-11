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
            <Home title="dashboard" />
          </Route>
          <Route exact path="/product/create">
            <Home title="add-product" />
          </Route>
          <Route exact path="/product/list">
            <Home title="product-list" />
          </Route>
          <Route exact path="/product/edit/:id">
            <Home title="product-edit" />
          </Route>
          <Route exact path="/product/list/faulty">
            <Home title="faulty-product-list" />
          </Route>
          <Route exact path="/product/stocks">
            <Home title="product-stocks" />
          </Route>

          {/* Warehouse */}
          <Route exact path="/warehouse/create">
            <Home title="add-warehouse" />
          </Route>
          <Route exact path="/warehouse/list">
            <Home title="warehouse-list" />
          </Route>
          <Route exact path="/warehouse/edit/:id">
            <Home title="warehouse-edit" />
          </Route>

          {/* Other */}
          <Route exact path="/product/user/leave">
            <Home title="user-leave" />
          </Route>
          <Route exact path="/product/user/leave/myrequest">
            <Home title="user-myLeave" />
          </Route>
          <Route exact path="/product/user/activities">
            <Home title="user-activities" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
