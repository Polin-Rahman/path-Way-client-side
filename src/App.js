import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Menubar from './components/Menubar/Menubar';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import OrderPlace from './components/OrderPlace/OrderPlace';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddService from './components/AddService/AddService';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute >
            <PrivateRoute path="/orderplace/:id">
              <OrderPlace></OrderPlace>
            </PrivateRoute >
            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute >
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute >
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
