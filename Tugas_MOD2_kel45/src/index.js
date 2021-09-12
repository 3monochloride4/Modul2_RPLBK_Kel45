import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from './components/CardList';
import gambar_1 from 'https://images.unsplash.com/photo-1588571590924-433cc2020a12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhdHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
import gambar_2 from 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/253386/1389579/main-image'
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
    <CardList
      card_data = {data}
      isNameBold
     />
<Quotes author="Shirou" quotes={quotes} books={books}/>
  </React.StrictMode>,
  document.getElementById("root")
);
