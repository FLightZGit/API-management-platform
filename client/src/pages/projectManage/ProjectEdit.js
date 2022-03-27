import React from 'react'
import { Button, Card, Form, Input } from 'antd'

function ProjectEdit() {
  return (
    <Card title='编辑项目'>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="vertical"
      >
        <Form.Item label='项目名称' required><Input /></Form.Item>
        <Form.Item label='项目创建者' required><Input /></Form.Item>
        <Form.Item label='项目备注' required><Input /></Form.Item>
        <Form.Item ><Button type='primary' htmlType='submit'>保存</Button></Form.Item>
      </Form>
    </Card>
  )
}

export default ProjectEdit