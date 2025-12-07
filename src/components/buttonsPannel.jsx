import React from "react";
import Button from "./button";

export default function ButtonsPanel({
  onClear,
  onNumber,
  onOperator,
  onDecimal,
  onEquals,
}) {
  return (
    <div className="buttons">
      {/* Clear */}
      <button id="clear" onClick={onClear}>AC</button>

      {/* Operators */}
      <Button id="divide" value="/" className="operator" onClick={onOperator} />
      <Button id="multiply" value="*" className="operator" onClick={onOperator} />
      <Button id="subtract" value="-" className="operator" onClick={onOperator} />

      {/* Numbers */}
      <Button id="seven" value="7" onClick={onNumber} />
      <Button id="eight" value="8" onClick={onNumber} />
      <Button id="nine" value="9" onClick={onNumber} />
      <Button id="add" value="+" className="operator" onClick={onOperator} />

      <Button id="four" value="4" onClick={onNumber} />
      <Button id="five" value="5" onClick={onNumber} />
      <Button id="six" value="6" onClick={onNumber} />
      <button id="equals" onClick={onEquals}>=</button>

      <Button id="one" value="1" onClick={onNumber} />
      <Button id="two" value="2" onClick={onNumber} />
      <Button id="three" value="3" onClick={onNumber} />

      {/* Zero row */}
      <button id="zero" className="zero" onClick={() => onNumber("0")}>0</button>
      <button id="decimal" onClick={onDecimal}>.</button>
    </div>
  );
}
