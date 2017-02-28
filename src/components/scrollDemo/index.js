/* Libs */
import React, { Component } from 'react'
import _ from 'lodash';
/* Components */
import Scroll from 'Public/scroll'

const dataList = []
const creatData = (start, end) => {
  for (let i = start; i <= end ; i++ ) {
    dataList.push({
      title: `标题${i}`,
      text: `测试数据${i}`
    })
  }
}

class ScrollDemo extends Component {
  constructor(props) {
    super(props);
    creatData(1, 10);
    this.state = {
      dataList: dataList
    };
  }

  handleScroll = () => {
    creatData(11, 15);
    this.setState({
      dataList: dataList
    });
  }

  render() {
    const list = _.map(this.state.dataList, (item, index) => (
      <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    ))
    return (
      <div className='scroll-demo'>
        <h2>scroll demo</h2>
        <Scroll handleScroll={this.handleScroll}>
          {list}
        </Scroll>
      </div>
    )
  }
}

export default ScrollDemo
