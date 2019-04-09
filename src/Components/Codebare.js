import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class Codebare extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div style={{background : 'rgb(113, 196, 140)'}}>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          onLoad={this.handleLoad}
          onImageLoad={this.handleImageLoad}
          style={{width : '27%', margin :'1.6%' , padding : '24px' }} 
        />
        <p style={{textAlign:'center', color : 'red'}}>ici ==>  {this.state.result}</p>
      </div>
    )
  }
}

export default Codebare;