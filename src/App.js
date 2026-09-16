import { useState } from "react";

export function Square({squareValue = "1"}) {
  const [val, setValue] = useState("");

  function handleClick() {
    console.log(val);
    setValue(squareValue);
    if (val != squareValue)
      setValue(squareValue);
    else
      setValue("");
  }
  
  // return <button className="square">{val}</button>;
  return <button className="square" onClick={handleClick}>{val}</button>;
}

export default function Board() {
  const [nextPiece, setNextPiece] = useState("x");

  console.log(nextPiece);

  return(<>
    <div class="board-row">
      <Square squareValue={nextPiece} />
      <Square squareValue={nextPiece} />
      <Square squareValue={nextPiece} />
    </div>

    <div class="board-row">
      <Square squareValue={nextPiece} />
      <Square squareValue={nextPiece} />
      <Square squareValue={nextPiece} />
    </div>

    <div class="board-row">
      <Square squareValue={nextPiece} />
      <Square squareValue={nextPiece} />
      <Square squareValue={nextPiece} />
    </div>
  </>);
}


