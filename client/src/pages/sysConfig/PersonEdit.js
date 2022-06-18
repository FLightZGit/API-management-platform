import React from 'react'
import { Button, Card, Form, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons';
import user_requests from '../../service/userService';
import { useNavigate } from 'react-router-dom';

function PersonEdit() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    const data = {
      username:localStorage.getItem('username'),
      password:values.newPassword
    }
    console.log(data)
    user_requests.updatePassword(data)
    
    navigate('/login')
  }
  return (
    <Card title='修改密码'>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: '请输入新密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            autoComplete="on"
            placeholder="请输入新密码"
          />
        </Form.Item>
        <Form.Item
          name="newPasswordConfirm"
          rules={[
            {
              required: true,
              message: '请确认新密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            autoComplete="on"
            placeholder="请确认新密码"
          />
        </Form.Item>
        <Form.Item ><Button type='primary' htmlType='submit'>保存</Button></Form.Item>
      </Form>
    </Card>
  )
}

export default PersonEdit