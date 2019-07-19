// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {

  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <form>
        <input onChange={this.handleChange} id="firstName" type="text" name="firstName" value={this.state.firstName} />
        <input onChange={this.handChange}id="lastName" type="text" name="lastName" value={this.state.lastName} />
      </form>
    )
  }

}
