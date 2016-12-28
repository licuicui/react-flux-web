/* Libs */
import React, { Component } from 'react'
/* Images */
import ROMENS from 'Images/romens.png'
import LOGINLOGO from 'Images/loginLogo.png'
/* Components */
import { Menu, Dropdown, Icon } from 'antd'
import Nav from 'Public/nav/index'
/* Actions */
import UserAction from 'SupplierActions/useAction'
/* NavImages */
import navImages from 'Public/navImages/index'
const items = [
  {
    title: '首页',
    img: navImages.home,
    activeImg: navImages.homeSelected,
    path: 'seller/home'
  }, {
    title: '客户管理',
    img: navImages.userManage,
    activeImg: navImages.userManageSelected,
    path: 'seller/customer',
    subMenus: {
      title: '客户管理',
      items: [
        {
          title: '已开通客户',
          path: 'seller/customer/opened'
        }, {
          title: '待开通客户',
          path: 'seller/customer/toBeOpened'
        }
      ]
    }
  }
]

class Body extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: 'seller'
    }
  }

  logoutClick = (username) => {
    UserAction.logout(username);
  }

  render () {
    const { children } = this.props
    const username = this.state.username
    const menu = (
      <Menu>
        <Menu.Item key='0'>
          <button className='user-dropdown-menu' onClick={() => this.logoutClick(username)}>退出</button>
        </Menu.Item>
      </Menu>
    );
    return (
      <div style={{ height: '100%' }}>
        <Nav items={items} logo={ROMENS} />
        <div id='main'>
          <Dropdown overlay={menu} trigger={[ 'click' ]}>
            <button className='login-info-menu'>
              {username}<Icon type='down' />
            </button>
          </Dropdown>
          {children}
        </div>
      </div>
    );
  }

}

export default Body
