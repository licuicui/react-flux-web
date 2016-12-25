import React, { Component } from 'react'
import './home.css'

class Home extends Component {

  render() {
    var a = 'test'
    if(a == 'test') {
      console.log("a")

    }
    return (
        <div className='home'>
            <div className='header'>
                header
            </div>
        </div>
    )
  }
}

export default Home
