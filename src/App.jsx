import {useState} from "react"
import {ethers} from "ethers"
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#111860] via-indigo-500 to-cyan-600">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
