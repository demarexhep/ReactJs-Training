import React from "react";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Counteri from "./components/Counteri";
import Eventet from "./components/Events/Eventet";
import EventBind from "./components/Events/EventBind";
import ClassEvent from "./components/Events/ClassEvent";
import MethodsAsProps from "./components/MethodsAsProps/MethodsAsProps";
import ConditinalRendering from "./components/ConditinalRendering";
import ListRendering from "./components/Listrendering/ListRendering";
import StyleSheet from "./components/StyleSheet";
import InlineStyle from "./components/InlineStyle";
import FormsHandling from "./components/FormsHandling";
import ReactFragments from "./components/ReactFragments";
import Table from "./components/Table";
import PureComp from "./components/RPMcomponents/PureComp";
import ParentComp from "./components/RPMcomponents/ParentComp";
import Refsdemo from "./components/Refs/Refsdemo";
import RefClassParent from "./components/Refs/RefClassParent";
import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
import Counter from "./components/RenderProps/Counter";

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
      {/* Perdorimi i formave */}
      {/* <FormsHandling /> */}
      {/* <ReactFragments /> */}
      {/* <Table /> */}
      {/* <ParentComp /> */}
      {/* <Refsdemo /> */}
      {/* <RefClassParent /> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      //#endregion
      <Counter
        render={(count, incrementHandle) => (
          <ClickCounter count={count} incrementHandle={incrementHandle} />
        )}
      />
      <Counter
        render={(count, incrementHandle) => (
          <HoverCounter count={count} incrementHandle={incrementHandle} />
        )}
      />
    </div>
  );
}

export default App;
