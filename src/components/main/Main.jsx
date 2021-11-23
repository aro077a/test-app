import React from "react";
import "./main.scss";

import Article from "./article/Article";
import Aside from "./aside/Aside";

const Main = () => {
  return (
    <main className="main">
      <Article />
      <Aside />
    </main>
  );
};

export default Main;
