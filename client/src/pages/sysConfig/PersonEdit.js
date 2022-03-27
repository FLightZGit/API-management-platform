import React from 'react'
import { Button, Card, Form, Input } from 'antd'

function personEdit() {
  return (
    <Card title='编辑账号'>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="vertical"
      >
        <Form.Item label='账号' required><Input /></Form.Item>
        <Form.Item label='密码' required><Input /></Form.Item>
        <Form.Item ><Button type='primary' htmlType='submit'>保存</Button></Form.Item>
      </Form>
    </Card>
  )
}

export default personEdit