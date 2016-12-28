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
import { SecondaryNavLink } from 'Public/navLink/index'
import FontAwesome from 'react-fontawesome'

class SecondaryNav extends React.Component {
  /**
  * 生成导航栏列表
 * @param items
 * @returns {*}
 */
  generateMenu = items => items.map((item, index) => (
    <li key={`secondeNavItem${index}`} className='secondary-nav-item'>
      <SecondaryNavLink to={item.path}>
        {item.iconName ? <FontAwesome name={item.iconName} /> : ''}
        {item.title}
      </SecondaryNavLink>
    </li>
  ))

  render() {
    const { items, dashboard } = this.props
    return (
      <div className='secondary-nav-wrapper'>
        <div className='dashboard'>
          <span>{dashboard}</span>
        </div>
        <ul className='secondary-nav'>
          {this.generateMenu(items)}
        </ul>
      </div>
    );
  }
}

SecondaryNav.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      iconName: React.PropTypes.string,
      path: React.PropTypes.string.isRequired,
    }).isRequired,
  ),
  dashboard: React.PropTypes.string,
};

SecondaryNav.defaultProps = {
  items: [],
  dashboard: '',
};

export default SecondaryNav;
