import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span>{this.props.counter.value}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          +
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
