import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Foooter from "./Components/Foooter";

const App = () => {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Foooter />
    </>
  );
};

export default App;
