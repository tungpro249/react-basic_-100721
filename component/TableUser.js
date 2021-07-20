import React from "react"

export default class TableUser extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users: [
        {id: 1, name: "A", age: 20},
        {id: 2, name: "B", age: 21},
        {id: 3, name: "C", age: 22}
      ]
    }
  }

  render(){
    return(
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </thead>
      <tbody>
        {
          this.state.users.map((u) => {
            return <UserInfo user = {u} key = {u.id} />
          })
        }
      </tbody>
      </table>
    )
  }
}

function UserInfo(props) {
  return <tr>
    <td>{props.user.id}</td>
    <td>{props.user.name}</td>
    <td>{props.user.age}</td>
  </tr>
}