import NavBar from './components/sales/NavBar'
import TableCustomer from './components/sales/TableCustomer';
import FormUpdateCustomer from './components/sales/FormUpdateCustomer';
import FormAddCustomer from './components/sales/FormAddCustomer'
import SubMenuCustomer from './components/sales/SubMenuCustomer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SalesChart from './components/sales/SalesChart';
import Footer from './components/sales/Footer';
import TableOrders from './components/sales/TableOrders';
import Login from "./components/common/Signin";
import SubMenuOrder from './components/sales/SubMenuOrder';
import Profile from './components/sales/Profile';
import FormUpdateUser from './components/sales/FormUpdateUser';
import SubMenuHeading from './components/sales/SubMenuHeading';
import FormChangePassword from './components/sales/FormChangePassword';
import StackedAreaChart from './components/sales/StackedAreaChart';
import PromptCreateOrder from './components/sales/PromptCreateOrder';
import TableProduct from './components/sales/TableProduct';
import FormUpdateOrder from './components/sales/FormUpdateOrder';
import TableEmails from './components/sales/TableEmails';
import "./components/product-manager/assets/css/bootstrap.min.css";
import SalesHome from './components/sales/SalesHome'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/product-manager/home/Home";
// import Login from "./components/common/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login}></Route>
          <Route exact path="/sales/">
            <SalesHome/>
          </Route>
          <Route exact path="/sales/orders">
            <NavBar/>
            <SubMenuOrder/>
            <TableOrders/>
            <Footer/>
          </Route>
          <Route exact path="/sales/order/update/:id">
            <NavBar/>
            <FormUpdateOrder/>
            <Footer/>
          </Route>
          <Route exact path="/sales/order/add">
            <NavBar/>
            <SubMenuOrder/>
            {/* <FormAddOrder/> */}
            <PromptCreateOrder/>
            <Footer/>
          </Route>
          <Route exact path="/sales/order/place/:id">
            <NavBar/>
            <SubMenuOrder/>
            {/* <FormAddOrder/> */}
            <TableProduct/>
            <Footer/>
          </Route>
          <Route exact path="/sales/customers">
            <NavBar/>
            <SubMenuCustomer/>
            <TableCustomer/>
            <Footer/>
          </Route>
          <Route exact path="/sales/customer/update/:id">
            <NavBar/>
            <SubMenuCustomer/>
            <FormUpdateCustomer/>
            <Footer/>
          </Route>
          <Route exact path="/sales/customer/add">
            <NavBar/>
            <SubMenuCustomer/>
            <FormAddCustomer/>
            <Footer/>
          </Route>
          <Route exact path="/sales/statistics">
            <NavBar/>
            
            <StackedAreaChart/>
            <Footer/>
          </Route>
          <Route exact path="/sales/profile/user">
            <NavBar/>
            <SubMenuHeading heading="View Profile"/>
            <Profile/>
            <Footer/>
          </Route>
          <Route exact path="/sales/profile/update">
            <NavBar/>
            <SubMenuHeading heading="Edit Profile"/>
            <FormUpdateUser/>
            <Footer/>
          </Route>
          <Route exact path="/sales/emails/all/">
            <NavBar/>
            <SubMenuHeading heading="Emails"/>
            <TableEmails/>
            <Footer/>
          </Route>
          <Route exact path="/sales/leaverequest/">
            <NavBar/>
            <SubMenuHeading heading="Leave Request"/>
            
            <Footer/>
          </Route>
          <Route path="/sales/profile/changepassword">
            <NavBar/>
            <SubMenuHeading heading="Change Password"/>
            {/* <FormUpdateUser/> */}
            <FormChangePassword/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
