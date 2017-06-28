import React from 'react';
import './AgeAndName.css';

export default class AgeAndName extends React.Component {
  constructor() {
    super();
    this.state = { name: '', age: null }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAgeChange(event) {
    const value = event.target.value;
    if (!value) {
      this.setState({ age: null });
    } else {
      const intAge = parseInt(event.target.value, 10);
      if (!isNaN(intAge)) {
        this.setState({ age: intAge });
      }
    }
  }

  render() {
    const name = this.state.name;
    const age = this.state.age;
    const currentYear = (new Date()).getFullYear();
    return (
      <div className="ageAndName">
        <div>
          <label>
            Name:
            <input value={this.state.name} onChange={e => this.handleNameChange(e)} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              value={age !== null ? age : ''}
              onChange={e => this.handleAgeChange(e)} />
          </label>
        </div>
        <div>
          {age && name ?
            <p className="results">
              Hello {this.state.name}, you said you were {age} years old.
              Maybe you were born in {currentYear - age}?
              Also, you {age >= 21 ? 'can' : 'cannot'} get into a bar.
            </p> :
            <p className="results">
              Please add your name and age above.
            </p>
          }
        </div>
      </div>
    );
  }
}
