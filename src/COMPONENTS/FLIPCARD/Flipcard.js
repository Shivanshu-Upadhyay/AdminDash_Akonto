import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import { Frontcard,Backcard } from './Atmcard';


export default class Flipcard extends Component {
      constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
        <div>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <Frontcard/>
        <Backcard/>
      </ReactCardFlip>
        <button onClick={this.handleClick}>Click to flip</button>

        </div>
    )
  }
}
