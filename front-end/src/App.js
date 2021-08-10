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
        </Switch>
      </Router>
    </>
  );
}

export default App;
