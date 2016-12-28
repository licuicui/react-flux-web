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
import _ from 'lodash'
import PrimaryNav from './PrimaryNav'
import SecondaryNav from './SecondaryNav'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subMenus: props.items[0].subMenus || {}
    }
  }

  componentWillMount() {
    const paths = window.location.hash.split('/')
    const lastPath = paths[2].split('?');
    const newPath = paths.splice(2,1,lastPath[0],lastPath[1]);
    const currentPriNavItem = _.find(this.props.items, { path: paths[1] + '/' + paths[2] })
    const subMenus = currentPriNavItem.subMenus || {}
    this.setState({
      subMenus: subMenus
    });
  }

  handlePrimaryNavToggle = (path, items) => {
    const primaryNavItemSrc = _.find(items, { path: path })
    this.setState({
      subMenus: primaryNavItemSrc.subMenus || {}
    });
  }

  render() {
    const { items, logo } = this.props
    const { subMenus } = this.state
    const hasItemsProperty = {}.hasOwnProperty.call(subMenus, 'items')
    let secondaryNav = ''
    if (hasItemsProperty && subMenus.items.length > 0) {
      secondaryNav = (
        <SecondaryNav
          items={subMenus.items}
          dashboard={subMenus.title}
        />
      )
    }
    return (
      <div className='nav-wrapper'>
        <PrimaryNav
          items={items}
          logo={logo}
          onClick={path => this.handlePrimaryNavToggle(path, items)}
        />
        {secondaryNav}
      </div>
    );
  }
}

Nav.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      iconName: React.PropTypes.string,
      path: React.PropTypes.string.isRequired,
      subMenus: React.PropTypes.shape({
        title: React.PropTypes.string,
        items: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            title: React.PropTypes.string,
            path: React.PropTypes.string
          })
        )
      })
    })
  ),
  logo: React.PropTypes.string
}

export default Nav
