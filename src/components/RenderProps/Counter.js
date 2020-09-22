import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementHandle = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.state.incrementHandle)}
      </div>
    );
  }
}
//Me kete shembull mesojm se nga nje component Parent mund ti shperndajm te njejtat funksionalitete
//te child komponentet sikur se i shperndam ne click dhe hover counter
export default Counter;
