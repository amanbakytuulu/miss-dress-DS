import React, { useEffect } from "react";

import { AppRouter } from "./components";

import { Footer, Header } from "./layout";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
