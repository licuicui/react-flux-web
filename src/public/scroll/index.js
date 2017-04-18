/* Libs */
import React, { Component } from 'react'

class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount() {
  //   creatData(1, 10);
  // }

  componentDidMount() {
    console.log('common scroll componentDidMount')
    //下拉刷新监听绑定
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    //移除监听
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = document.body.scrollTop;
    const offsetHeight = document.body.offsetHeight;
    const scrollHeight = document.body.scrollHeight;
    if (scrollTop >= scrollHeight - offsetHeight) {
      this.props.handleScroll();
    }
  }

  render() {
    return (
      <div className='scroll-container'>
        {this.props.children}
      </div>
    )
  }
}

export default Scroll
