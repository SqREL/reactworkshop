import "./assets/styles/main.scss";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from 'react-router-dom'

import Shop from "./components/Shop/Shop";
import SuccessPage from "./components/SuccessPage/SuccessPage";

const App = () => {
  return(
    <BrowserRouter>
      <Route path="/success" component={SuccessPage}/>
      <Route path="/" exact component={Shop} />
    </BrowserRouter>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
