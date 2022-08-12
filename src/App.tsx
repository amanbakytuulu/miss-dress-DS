import React, { useEffect } from "react";

import { AppRouter } from "./components";

import { Footer, Header } from "./layout";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
