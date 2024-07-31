import React from "react";
import "./App.css";
import Posts from "./Posts";

function App() {
  return (
    <div className="App container mx-auto">
      <h1 className="text-3xl font-bold mb-8 mt-10">Lista de Publicaciones</h1>
      <Posts />
    </div>
  );
}

export default App;
