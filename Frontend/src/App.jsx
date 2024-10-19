// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import logo from './logo.svg';
import Login from "./component/Login";
import "./App.scss";
import SideBar from "./layout/sidebar/SideBarMenu";
import MainContent from "./layout/main/MainContent";
// import { GlobalAppContext } from "./context";
function App() {
  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);

  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";

  return (
    // <Router>
    //   <GlobalAppContext.Provider
    //     value={{ toggled, setToggled, hasBackground, setHasBackground }}
    //   >

    //   </GlobalAppContext.Provider>
    // </Router>
    <>
      {/* <div className={"page-wrapper default-theme bg1 toggled"}>
        <SideBar />
      </div>
      <MainContent /> */}
      <Login />
    </>
  );
}

export default App;
