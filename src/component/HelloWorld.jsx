import React from "react";

class Hello extends React.Component {
  constructor(){
    super()
    this.state = {
      message: 'Hello World'
    }
  }

  render(){
    const { message } = this.state
    return (
      <div>
        <h2>{message} 你好，世界</h2>
      </div>
    )
  }
}

export default Hello