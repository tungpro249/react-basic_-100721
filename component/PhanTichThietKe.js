import React from "react"

export default class PhanTichThietKe extends React.Component{
  constructor(props){
    super(props)
    this.state ={
    users: [
      {id:1, name: "A", age: 10}
    ]
  }
}
  add = (user) =>{
    this.setState(prevState =>{
      return { users: [...prevState.users, user] }
    })
    console.log(this.state)
  }

  delete = (id) =>{
    let users = this.state.users.filter(item =>{
      return item.id != id
    })
    this.setState({ users })
  }

  render() {
    return(
      <div>
        <Form add ={this.add} />
        <Table users = {this.state.users} delete = {this.delete} />
      </div>
    )
  }
}

class Table extends React.Component{

  render(){
    return(
      <table border = "1">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>Action</th>  
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => {
              return 
              <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <th><button type="button" onClick ={this.props.delete(user.id)} >delede</button></th>
              </tr>
            })}
          </tbody>
        </table>
    )
  }
}

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: "",
      name: "",
      age: ""
    }
  }

  setParam = (e) =>{
    let name = e.target.name
    let value = e.target.value

    this.setState({ [name]: value})
  }

  addUser = (e) =>{
    this.props.add(this.state)
  }

  render(){
    return(
      <form>
        <input type="id" name ="id" placeholder ="id" onChange = {this.setParam}/>
        <input type="name" name ="name" placeholder ="name" onChange = {this.setParam} />
        <input type="age" name ="age" placeholder ="age" onChange = {this.setParam} />
        <button type="button" onClick = {this.addUser}>Add</button>
      </form>
    )
  }
}