import React from "react";
import "./App.scss";
import { AppRouter } from "./components";
import Footer from "./layout/Footer/Footer";
import ColactionContainer from "./pages/MainPage/components/CollactionContainer/CollactionContainer";
import SubscrubeContainer from "./pages/MainPage/components/SubscrubeContainer/SubscrubeContainer";

function App() {
  return (
    <div className="App">
      <AppRouter />

      <ColactionContainer/>
      <SubscrubeContainer/>
      <Footer/>
    </div>
  );
}

export default App;
