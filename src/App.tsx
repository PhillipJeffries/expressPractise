import * as React from "react";
import Todos from "./components/Todos";
// import img from "./assets/img/postcard.png";

import './app.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <Todos />
      {/* <img src={img} alt="img" /> */}
    </div>);
};

export default App;
