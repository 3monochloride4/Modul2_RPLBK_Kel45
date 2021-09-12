import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from './components/CardList';
//fotonya diganti ya, xixixi
//back to roman empire
import gambar_1 from './assets/images/foto1.jpg'
import gambar_2 from './assets/images/foto2.jpg'
import Quotes from "./components/Quotes";

const quotes =
"People Die When They're Killed";
const books =
"Fate/Unlimited Blade Works";

const data = [
  { nama: "Kholid Syaifullah", nim: "21120118120033", kelompok: "45", gambar: gambar_1},
  { nama: "Zainul Muttaqin", nim: "21120118130073", kelompok: "45", gambar: gambar_2 },
];

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <CardList
      card_data = {data}
      isNameBold
      univ = 'Universitas Diponegoro'
     />
<Quotes author="Shirou" quotes={quotes} books={books}/>
  </React.StrictMode>,
  document.getElementById("root")
);
