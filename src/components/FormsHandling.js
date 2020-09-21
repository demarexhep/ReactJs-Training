import React, { Component } from "react";

export default class FormsHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      products: "bmw",
    };
  }
  handleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleSelect = (event) => {
    this.setState({
      products: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.username} ${this.state.comments} ${this.state.products}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Enter your username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserName}
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleComments}
          ></textarea>
        </div>
        <div>
          <label>Select Product</label>
          <select value={this.state.products} onChange={this.handleSelect}>
            <option value="bmw">bmw</option>
            <option value="volvo">volvo</option>
            <option value="opel">opel</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
