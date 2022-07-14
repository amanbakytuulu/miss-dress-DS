import React from "react";
import "./App.scss";
import { AppRouter } from "./components";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Footer/>
    </div>
  );
}

export default App;
