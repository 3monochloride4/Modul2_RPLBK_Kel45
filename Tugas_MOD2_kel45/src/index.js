import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from './components/CardList';
import Potret from './assets/images/8434_2.jpg'; 

ReactDOM.render(
  <React.StrictMode>
    <CardList
      name = 'Zainul Muttaqin' 
      nim = '21120118130073' 
      kelompok = '0' 
      isNameBold
      image = {Potret}/>
  </React.StrictMode>,
  document.getElementById("root")
);
