import React from "react"

export default class ListNumber extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      number: [4,5,6,7]
    }
  }

  render(){
    // let numberArr = this.state.number.map((item) => {
    //   return <li key ={item}>{item}</li>
    // })
    return(
      <ul>{
        this.state.number.map((item) => {
          // return <li key ={item}>{item}</li>
          return <ListItem number = {item} key ={item}/>
        })  
      }
      </ul>
    )
  }
}

function  ListItem(props) {
  return <li>{props.number}</li>
}