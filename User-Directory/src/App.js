  
import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="mainContentDiv">
        <Header />
        <Search />
      </div>
      <Footer />
    </>
  );
}

export default App;