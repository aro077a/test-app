import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom/";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
