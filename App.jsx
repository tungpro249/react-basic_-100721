import React from 'react';
import LoginForm from './component/LoginForm';
import Clock from './component/Clock';
import Register from './component/Register';
import StateUpConvert from './component/StateUpConvert';
import ListNumber from './component/ListNumber';
import TableUser from './component/TableUser';
import PhanTichThietKe from './component/PhanTichThietKe';
import ThucHanhFormLogin from './component/ThucHanhFormLogin';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      data : "hello",
      count: 0
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(e){
    this.setState({ data: "goodbye"})
  }
  updateStateCountUp = () => {
    this.setState((prevState) => {
      return { count: prevState.count +1 }
    })
  }

  render(){
    return (
      <div>
        {/* <button type ="button" onClick = {this.updateState}>click me</button>
        <h4>{this.state.data}</h4>
        <button onClick = {this.updateStateCountUp}>count up {this.state.count}</button>
        <h4></h4> */}
        {/* <LoginForm /> */}
        {/* <Clock /> */}
        {/* <Register /> */}
        {/* <StateUpConvert /> */}
        {/* <ListNumber /> */}
        {/* <TableUser /> */}
        {/* <PhanTichThietKe /> */}
        <ThucHanhFormLogin />
      </div>
    )
  }
}

export default App;
