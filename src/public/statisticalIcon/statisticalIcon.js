import React from 'react'

class StatisticalIcon extends React.Component{
  render() {
    const { className, title } = this.props
    return (
      <div className={className}>
        <div className='icon-top'>
          <span className='title'>{title}</span>
          <span className='number'>
            <span>0</span>
            <span>/</span>
            <span>0</span>
          </span>
        </div>
      </div>
    )
  }
}

export default StatisticalIcon
