import NavBar from './components/sales/NavBar'
import TableCustomer from './components/sales/TableCustomer';
import FormUpdateCustomer from './components/sales/FormUpdateCustomer';
import FormAddCustomer from './components/sales/FormAddCustomer'
import SubMenuCustomer from './components/sales/SubMenuCustomer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './components/sales/App.css'
import SalesChart from './components/sales/SalesChart';
import Footer from './components/sales/Footer';
import TableOrders from './components/sales/TableOrders';
import Login from "./components/common/Signin";
import SubMenuOrder from './components/sales/SubMenuOrder';
import FormAddOrder from './components/sales/FormAddOrder';
import Profile from './components/sales/Profile';
// import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/sales/">
            <NavBar/>
            home
            <SalesChart/>
            <Footer/>
          </Route>
          <Route path="/sales/orders">
            <NavBar/>
            <SubMenuOrder/>
            <TableOrders/>
            <Footer/>
          </Route>
          <Route path="/sales/order/update/:id">
            <NavBar/>
            <FormUpdateCustomer/>
            <Footer/>
          </Route>
          <Route path="/sales/order/add">
            <NavBar/>
            <SubMenuOrder/>
            <FormAddOrder/>
            <Footer/>
          </Route>
          <Route path="/sales/customers">
            <NavBar/>
            <SubMenuCustomer/>
            <TableCustomer/>
            <Footer/>
          </Route>
          <Route path="/sales/customer/update/:id">
            <NavBar/>
            <SubMenuCustomer/>
            <FormUpdateCustomer/>
            <Footer/>
          </Route>
          <Route path="/sales/customer/add">
            <NavBar/>
            <SubMenuCustomer/>
            <FormAddCustomer/>
            <Footer/>
          </Route>
          <Route path="/sales/statistics">
            <NavBar/>
            statistics
            <Footer/>
          </Route>
          <Route path="/sales/emails">
            <NavBar/>
            emails
            <Footer/>
          </Route>
          <Route path="/sales/profile/user">
            <NavBar/>
            User
            <Profile/>
            <Footer/>
          </Route>
          <Route path="/sales/profile/update">
            <NavBar/>
            User
            <Footer/>
          </Route>

          {/* <Route exact path="/" component={Login}></Route>
          Product
          <Route exact path="/product"></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
