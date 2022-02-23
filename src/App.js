import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddShop from './components/AddShop';
import EditShop from './components/EditShop';


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>

        <Route exact path="/" component={() => <Home />} />



        <Route path="/add">
          <AddShop />

        </Route>
        <Route path="/edit/:id">
          <EditShop />

        </Route>


      </Switch>



    </div>
  );
}

export default App;
