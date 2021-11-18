import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import AddUser from './components/users/AddUser';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/addUser">
          <AddUser/>
        </Route>
        <Route exact path="/viewUser/:id">
          <ViewUser/>
        </Route>
        <Route exact path="/editUser/:id">
          <EditUser/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
