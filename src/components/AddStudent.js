import React, { Component } from 'react';

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="name" name="name"></input>
        <input type="text" placeholder="quote" name="quote"></input>
        <input type="text" placeholder="superlative" name="superlative"></input>
        <button>Submit</button>
      </form>
    )
  }
}

export default AddStudent;