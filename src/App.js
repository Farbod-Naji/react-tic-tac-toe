import { useState } from "react";

export function Square({squareValue = "1", onClick}) {
  const [val, setValue] = useState("");

  function handleClick() {
    // console.log(val);
    onClick();
    if (val == "")
      setValue(squareValue);
  }
  
  // return <button className="square">{val}</button>;
  return <button className="square" onClick={handleClick}>{val}</button>;
}

export default function Board() {
  const [nextPiece, setNextPiece] = useState("x");

  console.log(nextPiece);

  function alteredPiece(){
    console.log("clicked");
    if (nextPiece == "x")
      setNextPiece("o");
    else
      setNextPiece("x");
  }

  return(<>
    <div class="board-row">
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
    </div>

    <div class="board-row">
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
    </div>

    <div class="board-row">
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
      <Square squareValue={nextPiece} onClick={() => alteredPiece()}/>
    </div>
  </>);
  
}


