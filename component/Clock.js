import React, { Component } from "react";

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount(){
    this.time = setInterval(this.tick, 1000)
  }

  componentWillUnmount(){
    // clearInterval(this.time)
  }

  tick = ()=>{
    this.setState({ date: new Date() })
  }

  render() {
    return(
      <div>
        <p>{this.state.date.toString()}</p>
      </div>
    )
  }
}

export default Clock;