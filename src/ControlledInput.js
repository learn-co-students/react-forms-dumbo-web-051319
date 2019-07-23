import React from 'react';

class ControlledInput extends React.Component {

  state = {
    value: '',
  }

  handleChange = (event) => {
    // e.preventDefault()
    debugger
    this.setState(
      {value: event.target.value}
    );
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // debugger;
    console.log(this)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit"/>
      </form>
    );
  }

}

export default ControlledInput;
