/* Libs */
import React, { Component } from 'react'
/* Components */
import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [ { required: true, message: 'Please input your username!' } ],
          })(
            <Input addonBefore={<Icon type='user' />} placeholder='Username' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [ { required: true, message: 'Please input your Password!' } ],
          })(
            <Input addonBefore={<Icon type='lock' />} type='password' placeholder='Password' />
          )}
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    )
  }

}

export default Form.create()(Login)
