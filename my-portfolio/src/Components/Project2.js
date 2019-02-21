import React, { Component } from 'react'
import '../App.css'

class Project2 extends Component {

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column project-left">
          <h3>Project 2</h3>
          <p>Tech Used:</p>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="eight wide column project-right">

          <button
            className="ui button"
            onClick={() => this.props.modal2()}
          >
            Modal2
          </button>

        </div>
      </div>
    )
  }
}

export default Project2