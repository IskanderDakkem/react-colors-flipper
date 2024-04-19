import { useState } from "react";

import "./App.css";

function App() {
  //The state
  const [backgroudColor, setBackgroudColor] = useState("#f1f5f8");

  //get the radnom hex code for the background color
  const getTheRandomColor = () => {
    let hexColor = "#";
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
  };

  //Change the background color
  const changeBackgroundColor = () => {
    const color = getTheRandomColor();
    setBackgroudColor(color);
    document.body.style.backgroundColor = backgroudColor;
  };

  return (
    <div className="App">
      <nav>
        <div className="nav-center">
          <h4>Flip the color</h4>
        </div>
      </nav>
      <main>
        <div className="container">
          <h2>
            background color : <span className="color">{backgroudColor}</span>
          </h2>
          <button className="btn btn-hero" onClick={changeBackgroundColor}>
            change color
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
