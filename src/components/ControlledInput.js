// Code ControlledInput Component Here
import React from 'react';

// handleSubmit = (event) => {
//   event.preventDefault()
//   const firstName = event.target.children[0].value
//   const lastName = event.target.children[1].value
//   this.sendFormDataSomewhere({firstName,lastName})
// }
//
//
// <form onSubmit={this.handleSubmit}>
// </form>

class ControlledInput extends React.Component {
  state ={
    value: '',
  }

  handleChange = (event) => {
    this.setstate ={
      value: event.target.value
    }
  }

  render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      )

  }

}

export default ControlledInput
