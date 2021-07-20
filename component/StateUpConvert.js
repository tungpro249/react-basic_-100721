import React from 'react'

class StateUpConvert extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      cm : "",
      inch: ""
    }
  }

 convert = (value, unit) =>{
   if(!isNaN(value)){
     if(unit == 'cm'){
       let inch = parseFloat(value) /2.54
       this.setState({cm: value, inch})
     } else{
       let cm = parseFloat(value) *2.54
       this.setState({ inch: value,cm})
     }
   }else{
     this.setState({ cm: '', inch: ''})
   }
 }

  render(){
    return(
      <div>
        <InputForm unit = "cm" value ={this.state.cm} convert={this.convert}/> ==
        <InputForm unit = "inch" value ={this.state.inch} convert={this.convert}/>

      </div>
    )
  }
}
function InputForm(props) {
  return <span>
    <input type = "number" value = {props.value} onChange = {(e)=> props.convert(e.target.value, props.unit)}/> ({props.unit})
  </span>
}

export default StateUpConvert