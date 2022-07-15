import React from "react";

import { AppRouter } from "./components";

import ColactionContainer from "./pages/MainPage/components/CollactionContainer/CollactionContainer";
import SubscrubeContainer from "./pages/MainPage/components/SubscrubeContainer/SubscrubeContainer";
import { Footer, Header } from "./layout";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <ColactionContainer />
      <SubscrubeContainer />
      <Footer />
    </div>
  );
}

export default App;
