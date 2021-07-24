import './App.css';
import React from "react";
import Form from "./components/Form"

function App() {

  return (
    <div className="App">
      <nav>
        <img src="https://uploads-ssl.webflow.com/60304c29309be9cdc36d826d/60304e1f0f36e84878d0b846_pulse-logo.png" alt ="Pulse Protocol Logo"/>
        <h1>Pulse Protocol Marketing Calculator</h1>
      </nav>
      <Form />
    </div>
  );
}

export default App;
