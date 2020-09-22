import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { count, incrementHandle } = this.props;
    return (
      <div>
        <h1 onClick={incrementHandle}>Clicked {count} times . . .</h1>
      </div>
    );
  }
}

export default ClickCounter;
