/*****************************************************************
 * 青岛雨人软件有限公司©2016版权所有
 *
 * 本软件之所有（包括但不限于）源代码、设计图、效果图、动画、日志、
 * 脚本、数据库、文档均为青岛雨人软件或其附属子公司所有。任何组织
 * 或者个人，未经青岛雨人软件书面授权，不得复制、使用、修改、分发、
 * 公布本软件的任何部分。青岛雨人软件有限公司保留对任何违反本声明
 * 的组织和个人采取法律手段维护合法权益的权利。
 *****************************************************************/
import React from 'react'
import { PrimaryNavLink } from 'Public/navLink/index'
import FontAwesome from 'react-fontawesome'

class PrimaryNav extends React.Component {
  /**
   * 生成导航栏列表
   * @param items
   * @returns {*}
   */
  generateMenu = items => items.map((item, index) =>
    <li
      key={`menuItem${index}`}
      className='primary-nav-item'
    >
      <PrimaryNavLink to={item.path} onClick={this.handleClick} img={item.img} activeImg={item.activeImg}>
        {item.title}
      </PrimaryNavLink>
    </li>
  )

  handleClick = path => this.props.onClick(path)

  render() {
    const { items, logo } = this.props
    return (
      <div className='primary-nav-wrapper'>
        <div className='primary-nav-logo'>
          <img src={logo} alt='雨诺股份' />
        </div>
        <ul className='primary-nav'>
          {this.generateMenu(items)}
        </ul>
      </div>
    )
  }
}

PrimaryNav.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      iconName: React.PropTypes.string,
      path: React.PropTypes.string.isRequired,
    }).isRequired
  ),
  logo: React.PropTypes.string,
  onClick: React.PropTypes.func
}

PrimaryNav.defaultProps = {
  items: []
}

export default PrimaryNav
