import "./components/product-manager/assets/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/product-manager/home/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/product">
            <Home title="dashboard"></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
