import React from "react";

function Eventet() {
  function clickHandler() {
    console.log("button clicked...!");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default Eventet;

{
  /*
    -onClick={clickHandler} funksionon pasi qe butoni klikohet.
    -onClick={clickHandler()} ketu thiret funksioni para se te klikohet butoni.
    -Ne react nuk duhet perdoren clickHandler() kllapat kur kemi te bejme me eventet.
    */
}
