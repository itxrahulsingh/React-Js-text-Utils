import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Changed to Light", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Changed to Dark", "success");
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <Form showAlert={showAlert} title="Case Changer" mode={mode} />
    </>
  );
}

export default App;
