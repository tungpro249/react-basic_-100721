import React, { useState } from 'react'

function LoginForm(props){
  const[username, setUserName] = useState("admin")
  const[pass, setPass] = useState("")
  let change = (e)=>{
    setUserName(e.target.value)
  }
  let passWord = (e)=>{
    setPass(e.target.value)
  }
  return (
    <form>
      <label>user name</label>
      <input type = "text" onChange = {change} value = {username}></input>
      <p>{username}</p>
      <input type = "password" onChange = {passWord} value ={pass}></input>
      { pass.length < 6 && <p>bạn phải nhập 6 kí tự</p>}
    </form>
  );
}

export default LoginForm;