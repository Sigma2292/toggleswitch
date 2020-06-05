

import React, { Component } from 'react';
import { Button } from 'antd';



class ResetButton extends Component{
  
 
      render () {

     
      return (
          <div className="ResetButton">
            
           <Button  onClick={() => this.props.onButtonClick()}>reset</Button>
           
        </div>
      )

  }

}


export default ResetButton;
