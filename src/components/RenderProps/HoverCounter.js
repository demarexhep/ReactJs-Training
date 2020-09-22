import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count, incrementHandle } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementHandle}>Hovered {count} times . . .</h2>
      </div>
    );
  }
}

export default HoverCounter;
