import { useEffect, useState } from "react";
import "./sass/style.scss";

function App() {
  const [display, setDisplay] = useState<string>("0");

  useEffect(() => {
    console.log(`${display} ${typeof display}`);
  }, [display]);

  const handleNumber = (number: string) => {
    console.log(display);
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator: string) => {
    // if(/[+*/-]/.test(display[display.length - 4]) && display[display.length - 2] === '-'){
    //   setDisplay(`${display.slice(0, -5)} ${operator} `);
    // } 
    if (/[+*/-]/.test(display[display.length - 2]) && operator !== "-") {
      setDisplay(`${display.slice(0, -3)} ${operator} `);
    }  else if (operator === "-" && /[+\*/]/.test(display[display.length - 2])) {
      setDisplay(`${display} -`);
    } else if (operator === "-" && display[display.length - 2] !== "-") {
      setDisplay(`${display.slice(0, -3)} ${operator} `);
    } else {
      setDisplay(`${display} ${operator} `);
    }
  };

  const handleEqual = () => {
    setDisplay(eval(display).toString().trim());
  };

  const handleDecimal = () => {
    const array = display.toString().split(" ");
    const lastElement = array[array.length - 1];

    if (!lastElement.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleCleanAll = () => {
    setDisplay("0");
  };

  const handleClean = () => {
    display === ""
      ? "0"
      : setDisplay((prev) =>
          prev
            .toString()
            .split("")
            .slice(0, prev.toString().length - 1)
            .join("")
        );
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="output">
          <h4 id="display">{display}</h4>
        </div>
        <div className="grid">
          <div className="grid__btn clean" id="clear" onClick={handleCleanAll}>
            AC
          </div>
          <div
            className="grid__btn clean"
            id="clean1Digit"
            onClick={handleClean}
          >
            C
          </div>
          <div
            className="grid__btn dark-gray"
            id="divide"
            onClick={() => handleOperator("/")}
          >
            /
          </div>
          <div
            className="grid__btn dark-gray"
            id="multiply"
            onClick={() => handleOperator("*")}
          >
            *
          </div>
          <div
            className="grid__btn"
            id="seven"
            onClick={() => handleNumber("7")}
          >
            7
          </div>
          <div
            className="grid__btn"
            id="eight"
            onClick={() => handleNumber("8")}
          >
            8
          </div>
          <div
            className="grid__btn"
            id="nine"
            onClick={() => handleNumber("9")}
          >
            9
          </div>
          <div
            className="grid__btn dark-gray"
            id="subtract"
            onClick={() => handleOperator("-")}
          >
            -
          </div>
          <div
            className="grid__btn"
            id="four"
            onClick={() => handleNumber("4")}
          >
            4
          </div>
          <div
            className="grid__btn"
            id="five"
            onClick={() => handleNumber("5")}
          >
            5
          </div>
          <div className="grid__btn" id="six" onClick={() => handleNumber("6")}>
            6
          </div>
          <div
            className="grid__btn dark-gray"
            id="add"
            onClick={() => handleOperator("+")}
          >
            +
          </div>
          <div className="grid__btn" id="one" onClick={() => handleNumber("1")}>
            1
          </div>
          <div className="grid__btn" id="two" onClick={() => handleNumber("2")}>
            2
          </div>
          <div
            className="grid__btn"
            id="three"
            onClick={() => handleNumber("3")}
          >
            3
          </div>
          <div className="grid__btn" id="equals" onClick={handleEqual}>
            =
          </div>
          <div
            className="grid__btn"
            id="zero"
            onClick={() => handleNumber("0")}
          >
            0
          </div>
          <div className="grid__btn" id="decimal" onClick={handleDecimal}>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
