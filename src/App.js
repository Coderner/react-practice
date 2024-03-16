import React from "react";
import "./App.css";
import Card from "./Components/Card";

// card is reusable make it a component
function App() {
  return (
  <div className="main">
    <Card/>  
    {/* basically calling card function component here */}
    <Card/>
    <Card/>
  </div>
  );
}

export default App;