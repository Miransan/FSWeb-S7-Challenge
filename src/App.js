import React from "react";
import {  Switch, Route } from "react-router-dom";
import  Form  from "./Form";
import  Order  from "./Order";
import  Home  from "./Home";



const App = () => {
  return (
    
      <div className="App">
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={Form} />
          <Route path="/siparis" component={Order} />

          
        </Switch>
      
      </div>
    
  );
};
export default App;




