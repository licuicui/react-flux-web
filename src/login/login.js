/* Libs */
import React, { Component } from 'react'
/* Images */
import LOGINBG from 'Images/loginBg.png'
import LOGINLOGO from 'Images/loginLogo.png'
/* Components */
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
const FormItem = Form.Item

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: 'seller'
    }
  }

  handleType = (type) => {
    this.setState({
      type: type
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const type = this.state.type
    return (
      <div className='login'>
        <div className='content'>
          <div className='login-header'>
            <div className='logo'>
                <img src={LOGINLOGO} alt='logo' />
            </div>
            <div className='sys-name'>雨诺云协同</div>
          </div>
          <img className='login-bg' src={LOGINBG}/>
          <div className='login-box'>
            <div className='login-type'>
              <span className={type === 'buyer' ? 'active' : ''} onClick={() => this.handleType('buyer')}>采购方</span>
              <span className={type === 'seller' ? 'active' : ''} onClick={() => this.handleType('seller')}>销售方</span>
            </div>
            <Form className='login-form'>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [ { required: true, message: '用户名不能为空' } ],
                })(
                  <Input addonBefore={<Icon type='user' />} placeholder='请输入用户名' />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [ { required: true, message: '密码不能为空' } ],
                })(
                  <Input addonBefore={<Icon type='lock' />} type='password' placeholder='请输入密码' />
                )}
              </FormItem>
              <FormItem>
                <Button type='primary' onClick={this.handleSubmit} className='login-form-button'>
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }

}

export default Form.create()(Login)
