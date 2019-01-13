import React, { Component } from 'react'
const axios = require('axios')

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      setupBegan = false,
      isLoadingFieldsNeeded: true
    }

  }
  render() {
    return (
      <div className="container">
        <label>Message</label>
        <input type="text"/>
      </div>
    )
  }

  
}

export default App
