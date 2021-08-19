import NavBar from './components/sales/NavBar'
import TableCustomer from './components/sales/TableCustomer';
import FormUpdateCustomer from './components/sales/FormUpdateCustomer';
import FormAddCustomer from './components/sales/FormAddCustomer'
import SubMenuCustomer from './components/sales/SubMenuCustomer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './App.css'
import SalesChart from './components/sales/SalesChart';
import Footer from './components/sales/Footer';
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
          </Route>
          <Route path="/sales/orders/update">
            <NavBar/>
            <FormUpdateCustomer/>
          </Route>
          <Route path="/sales/customers">
            <NavBar/>
            <SubMenuCustomer/>
            <TableCustomer/>
          </Route>
          <Route path="/sales/customer/update/:id">
            <NavBar/>
            <SubMenuCustomer/>
            <FormUpdateCustomer/>
          </Route>
          <Route path="/sales/update/customer/">
            <NavBar/>
            <FormUpdateCustomer id="6"/>
          </Route> */
          <Route path="/sales/customer/add">
            <NavBar/>
            <SubMenuCustomer/>
            <FormAddCustomer/>
          </Route>
          <Route path="/sales/statistics">
            <NavBar/>
            statistics
          </Route>
          <Route path="/sales/emails">
            <NavBar/>
            emails
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
