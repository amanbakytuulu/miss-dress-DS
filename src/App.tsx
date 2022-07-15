import React from "react";

import { AppRouter, Modal } from "./components";
import { Footer, Header } from "./layout";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
