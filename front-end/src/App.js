import NavBar from './components/NavBar'
import TableCustomer from './components/TableCustomer';
import FormUpdateCustomer from './components/FormUpdateCustomer';
import SideMenuCustomer from './components/SideMenuCustomer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'
// import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/sales/">
            <NavBar/>
            home
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
            <SideMenuCustomer/>
            <TableCustomer/>
          </Route>
          <Route path="/sales/customers">
            <NavBar/>
            <SideMenuCustomer/>
            <FormAddCustomer/>
          </Route>
          <Route path="/sales/update/customer/">
            <NavBar/>
            <FormUpdateCustomer id="6"/>
          </Route>
          <Route path="/sales/customers/add">
            <NavBar/>
            <FormUpdateCustomer id="6"/>
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
