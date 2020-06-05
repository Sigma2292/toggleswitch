

import React, { Component } from 'react';
import './App.css';
import Switch from 'react-switch';
import  ResetButton from './Component/ResetButton';


class App extends Component{
  constructor(props) {
   super(props)
   this.state = {
        checked: false,
        disabled: false,
        toggleCount: 0,
       
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleChildClick = this.handleChildClick.bind(this);
  }
  handleChange(checked) {
    
    this.setState({toggleCount: this.state.toggleCount + 1});
    if( this.state.toggleCount > 5)
    {
      alert("Whoa! You clicked too much");
      this.setState({disabled:true});
    }
    else{

      this.setState({checked})

    }
     
  }

  handleChildClick(e){
   debugger
   this.setState({checked: false,
    disabled: false,
    toggleCount: 0});

  }
  

    render () {

     
      return (
          <div className="App">
             <h2> Toggle </h2>
             <Switch
               label="Disabled" disabled={this.state.disabled}
               className="react-switch"
               onChange={this.handleChange}
               checked={this.state.checked}
             
             />
             <p>this switch is <b>{this.state.checked ? 'on' : 'off'}</b></p>
             {/* <Button onClick={this.handleClick}>Reset</Button> */}
             <ResetButton onButtonClick={this.handleChildClick} />
           
        </div>
      )

  }

}


export default App;
