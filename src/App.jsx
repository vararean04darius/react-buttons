import { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [totalCount, addCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    addCount(totalCount + 1);
  };

  return (
    <>
      <div
        className="App"
        style={{
          backgroundColor,
        }}
      >
        <h1 className="count-container">Counter: {totalCount}</h1>
        <div className="buttons-container">
          {COLORS.map((color) => (
            <button
              type="button"
              key={color}
              onClick={onButtonClick(color)}
              className={backgroundColor === color ? "selected" : ""}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
