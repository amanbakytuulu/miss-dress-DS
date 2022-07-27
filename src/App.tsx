import React from "react";
import { useLocation } from "react-router-dom";

import { ADMIN_PAGE } from "./utils/path";

import { AppRouter } from "./components";
import { Footer, Header } from "./layout";

function App() {
  const { pathname } = useLocation();
  const shouldShow = pathname.split("/")[1] !== "admin";
  return (
    <div className="App">
      {shouldShow && <Header />}
      <AppRouter />
      {shouldShow && <Footer />}
    </div>
  );
}

export default App;
