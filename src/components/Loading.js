import React, { Component } from "react";

class Loading extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <p>Loading...</p>
    );
  }
}

export { Loading };