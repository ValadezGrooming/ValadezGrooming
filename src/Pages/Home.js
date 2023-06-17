import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <p>
            Hi I'm Steph and I groom dogs.  I specialize in small and medium dogs, and building a strong relationship with the dogs I work with.
          </p>
  
          <div>
            <p>Prices</p>
            <p>Between 26lb & 45lb - $155</p>
            <p>25lb or less - $135</p>
            <p>De-Matt Fee $20</p>
            <p>Special Needs Fee $20</p>
          </div>
        
          <iframe src="https://giphy.com/embed/bSIwCqjd9kTNJ6AAhg" width="480" height="270" frameBorder="0"></iframe>
        </header>
      </div>
    )
  }
}
