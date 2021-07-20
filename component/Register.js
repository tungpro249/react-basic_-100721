import React from 'react'

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      city: "Ha Noi",
      gender: "",
      favourites: [],
      file: "null"
    }
  }

  change = (e)=>{
    this.setState({ username: e.target.value})
  }
  pass = (e)=>{
    this.setState({ password: e.target.value})
  }
  
  city = (e)=>{
    this.setState({ city: e.target.value})
  }

  param = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    
    this.setState({ [name]: value})
  }

  // checkbox
  setFavourites = (e)=>{
    let value = e.target.value

    if(e.target.checked){
      this.setState((prevState) =>{
        return { favourites: prevState.favourites.concat([value]) }
      })
    }else{
      let favourites = this.state.favourites.filter(item =>{
        return item !== value
      })

      this.setState({ favourites })
    }
  }

  //file
  setFile =(e)=>{
    let files = e.target.files
    console.log(files)
    this.setState({ file: files[0] })
  }

  submit = ()=>{
    console.log(this.state)
  }

  render(){
    return(
      <form>
        <div>
          <span>Username </span>
          <input type ="text" name ="username" placeholder= "userner" value ={this.state.username}
          onChange ={this.param}></input>
        </div>

        <div>
          <span>Password </span>
          <input type ="password" name="password" placeholder= "password" value ={this.state.password}
          onChange ={this.param}></input>
        </div>

        <div>
          <span>City </span>
          <select value = {this.state.city} onChange ={this.param} name ="city">
            <option value ="HN">Ha Noi</option>
            <option value ="HCM">tp HCM</option>
            <option value ="Hue">Hue</option>
          </select>
          <p>{this.state.city}</p>
        </div>

        <div>
          <input type = "radio" name ="gender" value ="M" 
          defaultChecked ={this.state.gender == 'M'}  onChange ={this.param}/>Nam
          <input type = "radio" name ="gender" value ="F" 
          defaultChecked ={this.state.gender == 'F'}  onChange ={this.param}/>Nu
          <p>Enter {this.state.gender}</p>
        </div>

        <div>
          <input type = "checkbox" name ="favourites" value ="caffe" 
          defaultChecked ={this.state.favourites.indexOf('caffe') !== -1}  onChange ={this.setFavourites}/>caffe
          <input type = "checkbox" name ="favourites" value ="phim" 
          defaultChecked ={this.state.favourites.indexOf('phim') !== -1}  onChange ={this.setFavourites}/>phim
          <input type = "checkbox" name ="favourites" value ="sex" 
          defaultChecked ={this.state.favourites.indexOf('sex') !== -1}  onChange ={this.setFavourites}/>sex
          <p>Enter {this.state.favourites.toString()}</p>
        </div>

        <div>
          <input type ="file" onChange = {this.setFile} />
          <p>{ this.state.file && this.state.file.name }</p>
        </div>

        <button type = "button" onClick ={this.submit}>Click</button>
      </form>
    )
  }
}

export default Register