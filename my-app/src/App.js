import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import GitCard from './components/GitCard'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentUser:[],
      followers: []
    }
  }
  componentDidMount(){
    axios
    .get(`https://api.github.com/users/uziasr`)
    .then(res=>{
      console.log(res.data)
      this.setState({
        currentUser:res.data
      })
      })
    .catch(err=>console.log(err))
    // console.log(this.currentUser) // returning undefined
  }

  componentDidUpdate(){
      
  }


  render(){

    return (
    <div>
      <GitCard user={this.state.currentUser}/>
    </div>
  );}
}

export default App;
