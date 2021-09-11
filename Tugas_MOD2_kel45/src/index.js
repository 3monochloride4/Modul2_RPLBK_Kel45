import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from './components/CardList';
import Potret from './assets/images/8434_2.jpg'; 
import Quotes from "./components/Quotes";

const quotes =
"People Die When They're Killed";
const books =
"Fate/Unlimited Blade Works";
ReactDOM.render(
  <React.StrictMode>
    <CardList
      name = 'Zainul Muttaqin and Kholid Syaifullah' 
      nim = '21120118130073 and 21120118120033' 
      kelompok = '45' 
      isNameBold
      image = {Potret}/>
<Quotes author="Shirou" quotes={quotes} books={books}/>
  </React.StrictMode>,
  document.getElementById("root")
);
