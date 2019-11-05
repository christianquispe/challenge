import React from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom";


import Layout from "./Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </Layout>
    </BrowserRouter>   
  );
}
export default App;
