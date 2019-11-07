import React from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom";


import Layout from "./Layout";


import Home from "../pages/Home";
import Companies from "../pages/Companies"
import Products from "../pages/Products";
import Login from "../pages/Login"
import Register from "../pages/Register"; 


import WelcomeNewUser from "../pages/WelcomeNewUser";
import CreateNewCompany from "../pages/CreateNewCompany";
function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/companies" component={Companies}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/welcome/new/user" component={WelcomeNewUser}/>
                <Route exact path="/create/new/company" component={CreateNewCompany}/>
            </Switch>
        </Layout>
    </BrowserRouter>   
  );
}
export default App;
