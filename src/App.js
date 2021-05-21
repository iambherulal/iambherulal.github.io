import React from "react";
import Header from "./Header";
import Main from "./Main";
import Preloader from "./Preloader";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Main />
      <Preloader />
    </React.StrictMode>
  );
}

export default App;
