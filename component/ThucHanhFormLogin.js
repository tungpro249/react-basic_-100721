import React from "react"

const form = {
  border: '1px solid',
  width: '300px',
  height: '210px',
  position: 'absolute',
  left: '38%',
  top: '12px',
  borderRadius: '5px',
  lineHeight: '0px'
}
const marginLeft ={
  marginLeft: '5px'
}
const input ={
  outline: 'none',
  padding: '5px',
  width: '92%',
  marginLeft: '5px'
}
const button ={
  marginLeft: '5px',
  marginTop: '15px',
  width: '97%',
  padding: '5px',
  color: 'white',
  background: 'black',
  fontWeight: '800',
  cursor: 'pointer'
}
const textAlign ={
  textAlign: 'center'
}
export default class ThucHanhFormLogin extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      user: "",
      pass: ""
    }
  }

  setParam = (e) =>{
    let name = e.target.name
    let value = e.target.value

    this.setState({ [name]: value })
  }

  button = (e)=>{
    console.log(this.state)
  }

  render(){
    return(
      <form style ={form}>
        <h1 style ={textAlign}>Login</h1>
        <p style ={marginLeft}>Username</p>
        <input style={input} type="text" placeholder ="Username" 
        value ={this.state.user} name ="user" onChange ={this.setParam} />
        <p style ={marginLeft}>Password</p>
        <input style={input} type="password" placeholder ="Password"
        value={this.state.pass} name ="pass" onChange ={this.setParam} />
        <br/>
        <button style={button} type ="button" onClick= {this.button} >Submit</button>
      </form>
    )
  }
}
