import React from 'react'
import { Button, Card, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom';

import project_requests from '../../service/projectService';

function ProjectCreat() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    project_requests.createProject(values)
    navigate('/')
  };

  return (
    <Card title='新建项目'>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item label='项目名称' required><Input /></Form.Item>
        <Form.Item label='项目创建者' required><Input /></Form.Item>
        <Form.Item label='项目备注' required><Input /></Form.Item>
        <Form.Item ><Button type='primary' htmlType='submit'>保存</Button></Form.Item>
      </Form>
    </Card>
  )
}

export default ProjectCreat