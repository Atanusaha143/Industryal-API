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
import FormUpdateUser from './components/sales/FormUpdateUser';
import SubMenuHeading from './components/sales/SubMenuHeading';
import FormChangePassword from './components/sales/FormChangePassword';
import StackedAreaChart from './components/sales/StackedAreaChart';
import PromptCreateOrder from './components/sales/PromptCreateOrder';
import TableProduct from './components/sales/TableProduct';
// import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/sales/">
            <NavBar/>
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
            {/* <FormAddOrder/> */}
            <PromptCreateOrder/>
            <Footer/>
          </Route>
          <Route path="/sales/order/place">
            <NavBar/>
            <SubMenuOrder/>
            {/* <FormAddOrder/> */}
            <TableProduct/>
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
            <StackedAreaChart/>
            <Footer/>
          </Route>
          <Route path="/sales/emails">
            <NavBar/>
            <Footer/>
          </Route>
          <Route path="/sales/profile/user">
            <NavBar/>
            <SubMenuHeading heading="View Profile"/>
            <Profile/>
            <Footer/>
          </Route>
          <Route path="/sales/profile/update">
            <NavBar/>
            <SubMenuHeading heading="Edit Profile"/>
            <FormUpdateUser/>
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
