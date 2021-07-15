import React, { Component } from 'react';
import AD1 from './ad1.mp4';
import AD2 from './ad2.mp4';
import AD3 from './ad3.mp4';
import AD4 from './ad4.mp4';
import Fade from 'react-reveal/Fade';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      videos: [
        AD1,
        AD2,
        AD3,
        AD4
      ],
      index: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    setTimeout(function () { //Start the timer
      this.setState({ clicked: true }) //After 10 second, set render to true
    }.bind(this), 10000)
  }

  handleClick = (event) => {
    this.setState({
      index: event.target.id,
      clicked: !this.state.clicked
    })
    console.log(this.state.index)
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          {(this.state.clicked) ?
            <div>
              <div className="row-wrapper">
                <Fade top left>
                  <div className="row-inner-left">
                    <button id="0" className="button" onClick={this.handleClick}>
                      Video 1
                    </button>
                  </div>
                </Fade>
                <Fade top right>
                  <div className="row-inner-right">
                    <button id="1" className="button" onClick={this.handleClick}>
                      Video 2
                    </button>
                  </div>
                </Fade>
              </div>

              <div className="row-wrapper">
                <Fade bottom left>
                  <div className="row-inner-left">
                    <button id="2" className="button" onClick={this.handleClick}>
                      Video 3
                    </button>
                  </div>
                </Fade>
                <Fade bottom right>
                  <div className="row-inner-right">
                    <button id="3" className="button" onClick={this.handleClick}>
                      Video 4
                    </button>
                  </div>
                </Fade>
              </div>
            </div>
            :
            <video className="video-wrapper" autoPlay preload >
              <source src={this.state.videos[this.state.index]} type="video/mp4" />
            </video>
          }
        </div>
      </div >
    );
  }
}