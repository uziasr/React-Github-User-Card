import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import GitCard from './components/GitCard'
import GitFollowers from './components/GitFollowers'
import {data} from './data/data'
import {data1} from './data/MyData'

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
      axios
      .get(res.data.followers_url)
      .then(res=>{
        console.log(res)
      this.setState({followers:res.data})
      })
      .catch(err=>console.log(err))
      })
    .catch(err=>console.log(err));



    // console.log(this.currentUser) // returning undefined
  // this.setState({
  //   currentUser : data1,
  //   followers: data
  // })
  // console.log(this.state.followers)
  }


  render(){
    console.log(this.state.followers)
    return (
    <div>
      <GitCard user={this.state.currentUser}/>
      <GitFollowers followers={this.state.followers}/>
    </div>
  );}
}

export default App;
