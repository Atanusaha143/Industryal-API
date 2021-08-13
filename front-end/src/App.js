import NavBar from './components/NavBar'
import SideMenu from './components/SideMenu';
import TableCustomer from './components/TableCustomer';
import FormUpdateCustomer from './components/FormUpdateCustomer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Popup from 'reactjs-popup';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar/>
            {/* <SideMenu/> */}
            home
          </Route>
          <Route path="/orders">
            <NavBar/>
          </Route>
          <Route path="/orders/update">
            <NavBar/>
            <FormUpdateCustomer/>
          </Route>
          <Route path="/customers">
            <NavBar/>
            <SideMenu/>
            <TableCustomer/>
            {/* customers */}
          </Route>
          <Route path="/statistics">
            <NavBar/>
            statistics
          </Route>
          <Route path="/emails">
            <NavBar/>
            emails
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
