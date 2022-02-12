import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  // const [theme, setTheme] = useState("default");
  const [alert, setAlert] = useState(null); //these are called state

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const defaultTheme = () => {
    console.log("change theme");
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Theme has been changed", "success");
  };
  const blueTheme = () => {
    console.log("change theme");
    setMode("dark");
    document.body.style.backgroundColor = "#0b1223";
    showAlert("Theme has been changed", "success");
  };
  const yellowTheme = () => {
    console.log("change theme");
    setMode("dark");
    document.body.style.backgroundColor = "#a9a108";
    showAlert("Theme has been changed", "success");
  };
  const greenTheme = () => {
    console.log("change theme");
    setMode("dark");
    document.body.style.backgroundColor = "#134513";
    showAlert("Theme has been changed", "success");
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#131b2f";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* for react router :  https://v5.reactrouter.com/web/guides/quick-start */}
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        // toggleMode={toggleMode}
        defaultTheme={defaultTheme}
        blueTheme={blueTheme}
        yellowTheme={yellowTheme}
        greenTheme={greenTheme}
      />
      <Alert alert={alert} />
      <div className="container my-2">
        {/* <Switch>
            <Route exact path="/about">
              {/* use exact to prevent from react's partial matching */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <Textform
          showAlert={showAlert}
          heading="Enter text to analyze"
          mode={mode}
        />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
