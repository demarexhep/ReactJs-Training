import React from "react";

export default function MethodsAsProps1(props) {
  return (
    <div>
      <button onClick={() => props.greetParent("child")}>Click</button>
    </div>
  );
}

{
  /*Ky komponent eshte i lidhur me komponentin MethodAsProps konsiderohet si child component */
}
