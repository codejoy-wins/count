import React from 'react';
import './App.css';
import ChildComponent from './ChildComponent'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.double = this.double.bind(this)
    this.reset = this.reset.bind(this)
  }
  handleClick(){
    console.log("clicker")
    this.setState(prevState=>{
      return{
        count : prevState.count + 1
      }
    })
    let msg = ""
    document.getElementById("msgg").innerHTML = msg
  }

  double(){
    console.log("doubling", this.state.count)
    let msg
    if(this.state.count===0){
      console.log("error")
      msg = "cannot double zero"
      document.getElementById("msgg").innerHTML = msg
    }
    this.setState(prevState=>{
      return{
        count: prevState.count * 2
      }
    })
  }

  reset(){
    
    console.log("resetting", this.state.count)
    this.setState({count:0})
  }

  render(){
    return (
      <div className="App">
        Count: {this.state.count} <hr></hr>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.double}>Double</button>
        <button onClick={this.reset}>Reset</button>
        <div id="msgg"></div>
        <ChildComponent count = {this.state.count} />
        <ChildComponent count = {this.state.count+1} />


      </div>
    );
  }
  
}

export default App;
