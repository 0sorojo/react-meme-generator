import React from "react";
import "./App.css";
import MemeGenerator from "./components/MemeGenerator";
import Header from "./components/Header";

const App = () => {
  return (
    <section>
      <Header />
      <MemeGenerator />
    </section>
  );
};

export default App;
