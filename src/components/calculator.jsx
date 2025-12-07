import React, { useState } from "react";
import Display from "./display";
import ButtonsPanel from "./buttonsPannel";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("0");
  const [evaluated, setEvaluated] = useState(false);

  const isOperator = (ch) => /[+\-*/]/.test(ch);

  const clearAll = () => {
    setDisplay("0");
    setFormula("0");
    setEvaluated(false);
  };

  const handleNumber = (value) => {
    if (evaluated) {
      setDisplay(value);
      setFormula(value);
      setEvaluated(false);
      return;
    }

    if (display === "0" && formula === "0") {
      setDisplay(value);
      setFormula(value);
      return;
    }

    if (isOperator(formula[formula.length - 1])) {
      setDisplay(value);
      setFormula((prev) => prev + value);
    } else {
      if (display === "0") {
        setDisplay(value);
        setFormula((prev) => prev.slice(0, -1) + value);
      } else {
        setDisplay((prev) => prev + value);
        setFormula((prev) => prev + value);
      }
    }
  };

  const handleDecimal = () => {
    if (evaluated) {
      setDisplay("0.");
      setFormula("0.");
      setEvaluated(false);
      return;
    }

    if (display.includes(".")) return;

    if (isOperator(formula.slice(-1))) {
      setDisplay("0.");
      setFormula((prev) => prev + "0.");
    } else {
      setDisplay((prev) => prev + ".");
      setFormula((prev) => prev + ".");
    }
  };

  const handleOperator = (op) => {
    if (evaluated) {
      setFormula(display + op);
      setDisplay(op);
      setEvaluated(false);
      return;
    }

    const last = formula[formula.length - 1];
    const secondLast = formula[formula.length - 2];

    setDisplay(op);

    if (isOperator(last)) {
      if (op === "-" && !isOperator(secondLast)) {
        setFormula((prev) => prev + "-");
      } else {
        setFormula((prev) => prev.replace(/[+\-*/]+$/, op));
      }
    } else {
      setFormula((prev) => prev + op);
    }
  };

  const handleEquals = () => {
    let expr = formula;

    while (isOperator(expr.slice(-1))) {
      expr = expr.slice(0, -1);
    }

    try {
      let result = eval(expr); // eslint-disable-line no-eval
      result = Math.round(result * 1e12) / 1e12;

      setDisplay(String(result));
      setFormula(expr + " = " + result);
      setEvaluated(true);
    } catch {
      setDisplay("Error");
      setFormula("0");
      setEvaluated(true);
    }
  };

  return (
    <div className="calculator">
      <Display formula={formula} display={display} />
      <ButtonsPanel
        onClear={clearAll}
        onNumber={handleNumber}
        onOperator={handleOperator}
        onDecimal={handleDecimal}
        onEquals={handleEquals}
      />
    </div>
  );
}
