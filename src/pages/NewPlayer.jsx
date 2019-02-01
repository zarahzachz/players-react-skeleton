import React, { Component } from 'react';

export default class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      rating: '',
      handedness: 'right',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>First name</label>
          <input
            type="text"
            required
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            required
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="text"
            required
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Handedness</label>
          <select
            name="handedness"
            value={this.state.handedness}
            onChange={this.handleInputChange}
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
