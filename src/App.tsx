import { useState } from 'react'
import './sass/style.scss'

function App() {
  const [calculation, setCalculation] = useState({
    number: "",
    expression: "",
    answer: "0"
  });

  return (
    <div className="container">
      <div className="calculator">
        <div className="output">
          <input type="text" id="expression" placeholder='0' value={calculation.expression} disabled/>
          <h4 id="display">{calculation.answer}</h4>
        </div>
        <div className="grid">
          <div className="grid__btn clean" id="cleanAll">AC</div>
          <div className="grid__btn clean" id="clean">C</div>
          <div className="grid__btn dark-gray" id="divide">/</div>
          <div className="grid__btn dark-gray" id="multiply">*</div>
          <div className="grid__btn" id="seven">7</div>
          <div className="grid__btn" id="eight">8</div>
          <div className="grid__btn" id="nine">9</div>
          <div className="grid__btn dark-gray" id="subtract">-</div>
          <div className="grid__btn" id="five">5</div>
          <div className="grid__btn" id="six">6</div>
          <div className="grid__btn" id="seven">7</div>
          <div className="grid__btn dark-gray" id="add">+</div>
          <div className="grid__btn" id="one">1</div>
          <div className="grid__btn" id="two">2</div>
          <div className="grid__btn" id="three">3</div>
          <div className="grid__btn" id="equal">=</div>
          <div className="grid__btn" id="zero">0</div>
          <div className="grid__btn" id="decimal">.</div>
        </div>
      </div>
    </div>
  )
}

export default App
