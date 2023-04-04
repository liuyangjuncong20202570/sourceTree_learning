import React from 'react'
import Hello from './component/HelloWorld'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello React'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Hello />
      </div>
    )
  }
}

export default App