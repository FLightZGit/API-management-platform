import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../style/Login.css'
import { setToken } from '../util/auth';

function Login() {
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setToken(values.user)
    navigate('/')
  };

  return (
    <Card title='API管理平台登录' className='login-card'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="user"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            autoComplete="on"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          Or <a href="/register">马上注册!</a>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Login