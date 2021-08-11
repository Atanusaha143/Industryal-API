import Navb from './components/HR/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/HR'>
          <Navb title='Pie Chart' />
        </Route>
        <Route exact path='/HR/user/create'>
          <Navb title='New User' />
        </Route>
        <Route exact path='/HR/user/list'>
          <Navb title='User List' />
        </Route>
        <Route exact path='/HR/user/edit/:id'>
          <Navb title='Update User' />
        </Route>
        <Route exact path='/HR/employee/create'>
          <Navb title='New Employee' />
        </Route>
        <Route exact path='/HR/employee/group'>
          <Navb title='New Group' />
        </Route>
        <Route exact path='/HR/employee/list'>
          <Navb title='Employee List' />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
