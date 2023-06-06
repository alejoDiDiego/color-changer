import { useState } from "react";
import "./App.css";

function App() {
  // const [hex1, setHex1] = useState("");
  // const [hex2, setHex2] = useState("");
  // const [hex3, setHex3] = useState("");
  // const [hex4, setHex4] = useState("");
  // const [hex5, setHex5] = useState("");
  // const [hex6, setHex6] = useState("");

  const hexVal = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  function getRandomInt() {
    return Math.floor(Math.random() * 16);
  }

  const [hex, setHex] = useState("FFFFFF");

  const changeHex = () => {
    const hex1 = hexVal[getRandomInt()];
    const hex2 = hexVal[getRandomInt()];
    const hex3 = hexVal[getRandomInt()];
    const hex4 = hexVal[getRandomInt()];
    const hex5 = hexVal[getRandomInt()];
    const hex6 = hexVal[getRandomInt()];
    setHex(hex1 + hex2 + hex3 + hex4 + hex5 + hex6);
    console.log(hex);
  };

  return (
    <div
      className="transition-all w-screen h-screen flex flex-col justify-center items-center gap-16"
      style={{ backgroundColor: `#${hex}` }}
    >
      <h1 className="font-bold text-5xl ">Color changer</h1>
      <button
        className="bg-white  transition text-black  p-4 text-3xl rounded-lg shadow-lg shadow-black font-bold active:scale-90 hover:bg-black  hover:text-white"
        onClick={changeHex}
      >
        Click me!!
      </button>
    </div>
  );
}

export default App;
