import React, { Component } from "react";

class Welcome extends React.Component {
  render() {
    return(
      <div>
        <p>Welcome</p>
      </div>
    )
  }
}

class Logout extends Component {
  render() {
    return <a href ="#">logout</a>
  }
}

export default Welcome;