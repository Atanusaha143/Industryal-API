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
        <Route exact path='/HR/employee/edit/:employee_id'>
          <Navb title='Update Employee' />
        </Route>
        <Route exact path='/HR/employee/delete/:employee_id'>
          <Navb title='Delete Employee' />
        </Route>
        <Route exact path='/HR/employee/schedule'>
          <Navb title='Employees Schedule' />
        </Route>
        <Route exact path='/HR/leave/request'>
          <Navb title='Leave Request' />
        </Route>
        <Route exact path='/HR/leave/request/list'>
          <Navb title='Leave Request List' />
        </Route>
        <Route exact path='/HR/leave/approve/:id'>
          <Navb title='Approved Leave Request' />
        </Route>
        <Route exact path='/HR/leave/reject/:id'>
          <Navb title='Reject Leave Request' />
        </Route>
        <Route exact path='/HR/expense/report'>
          <Navb title='Expense Report' />
        </Route>
        <Route exact path='/HR/expense/list'>
          <Navb title='Expense Report List' />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
