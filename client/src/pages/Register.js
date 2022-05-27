import React from 'react'
import { useNavigate } from 'react-router-dom';
import user_requests from '../service/userService';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons';
import '../style/Login.css'

function Register() {
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values); 
    //setToken(values.user)
    user_requests.createUser(values).then(res=>{
      if(res.msg === 'fail'){
        alert(res.data)
        navigate('/register')
      } else {
        alert('注册成功')
        navigate('/login')
      }
    })
  };

  return (
    <Card title='API管理平台注册' className='login-card'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="UserName"
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
          name="Mail"
          rules={[
            {
              required: true,
              message: '请输入邮箱地址!',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="xxx@xx.com" />
        </Form.Item>

        <Form.Item
          name="Password"
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

        <Form.Item
          name="PasswordConfirm"
          dependencies={['Password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('Password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject(new Error('请保持两次输入的密码一致!'));
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            autoComplete="on"
            placeholder="确认密码"
          />
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button>

          <Button></Button>
          <Button href="/login" type="primary" htmlType="submit" className="login-form-button">
            返回登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Register