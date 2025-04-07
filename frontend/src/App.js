// src/App.js
import React from "react";
import Navbar from "./layout/navbar"; 
import Feed from "./pages/feed";      

const App = () => {
  return (
    <div>
      <Navbar />
      <Feed />
    </div>
  );
};

export default App;
