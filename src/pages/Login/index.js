import React, { Component } from 'react';
import { Form, Button, Input, Icon, Checkbox } from 'antd'
import { Login } from '@/api/login'
import CryptoJS from 'crypto-js'

import './style/index.scss'


class NormalLoginForm extends Component {

  handleSubmit = e => {

    e.preventDefault();

    this.props.form.validateFields((err, values) => {

      if (!err) {

        const { username, password, remember } = values

        Login(username, password).then( res => {
          if (remember) {
            console.log('yes');
            localStorage.setItem(username, JSON.stringify({
              username,
              password
            }));
            
            console.log(localStorage.getItem(username));

          } else {
            console.log('no');
            localStorage.removeItem(username)
            sessionStorage.setItem('userName', username)
            sessionStorage.setItem('passWord', password)
          }

          this.props.history.replace({
            pathname: "/home"
          });          
        })
        
      }
    });
  };

  componentDidMount () {

    this.initFromData()

  }

  initFromData = () => {

    const num = Number(localStorage.length-1);
    
    if ( num >= 0 ) {
      //通过localStorage的长度来获取最后一个存储信息
      const getKey = localStorage.key(num)
      const str = localStorage.getItem(getKey)

      const test = JSON.parse(str)
      // 初始化表单
      this.props.form.setFieldsValue(test);
    }

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (

      <div className='wrap'>
        <span className='icon1 icon'></span>
        <span className='icon2 icon'></span>
        <span className='icon3 icon'></span>
        <span className='icon4 icon'></span>
        <span className='icon5 icon'></span>
        <span className='icon6 icon'></span>
        <span className='icon7 icon'></span>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h2>Login</h2>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入您的账号!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入您的密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button"
              // onClick={this.test}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        </div>
    );
  }

}
export default Form.create({ name: 'normal_login' })(NormalLoginForm)

