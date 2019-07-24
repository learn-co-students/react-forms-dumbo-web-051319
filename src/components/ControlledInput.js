import React, { Component } from 'react';

export default class ControlledInput extends Component {
  state = {
    firstName: 'John',
    lastName: 'Henry'
  }

  handleFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.firstName + " " + this.state.lastName);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" name="firstName" onChange={e => this.handleFirstNameChange(e)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={e => this.handleLastNameChange(e)} value={this.state.lastName} />
        <input type='submit' />
      </form>
    )
  }
}
