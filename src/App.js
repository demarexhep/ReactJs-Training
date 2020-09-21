import React from "react";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Counter from "./components/Counter";
import Eventet from "./components/Eventet";
import EventBind from "./components/EventBind";
import ClassEvent from "./components/ClassEvent";
import MethodsAsProps from "./components/MethodsAsProps";
import ConditinalRendering from "./components/ConditinalRendering";
import ListRendering from "./components/ListRendering";
import StyleSheet from "./components/StyleSheet";
import InlineStyle from "./components/InlineStyle";
import FormsHandling from "./components/FormsHandling";

function App() {
  return (
    <div className="App">
      //#region
      {/* <Page1 name="Rexhep" age="24" location="Skopje">
        <p>this is sending props to parent from child</p>
      </Page1> */}
      {/* <Page1 name="Florim" age="24" location="Konjare">
        <button>Click</button>
      </Page1> */}
      {/* <Page1 name="Ramadan" age="16" location="Skopje"></Page1> */}
      {/* <Page2 /> */}
      {/* <Counter /> */}
      {/* <Eventet /> */}
      {/* <ClassEvent /> */}
      {/* <EventBind /> */}
      {/* <MethodsAsProps /> */}
      {/* <ConditinalRendering /> */}
      {/* <ListRendering /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <InlineStyle /> */}
      //#endregion
      {/* Perdorimi i formave */}
      {/* <FormsHandling /> */}
    </div>
  );
}

export default App;
