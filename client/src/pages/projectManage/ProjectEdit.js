import React from 'react'
import { Button, Card, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom';

import project_requests from '../../service/projectService';

function ProjectEdit() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    project_requests.updateProject()
    navigate('/')
  };

  return (
    <Card title='编辑项目'>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label='项目名称'
          name={'projectName'}
          rules={[
          {
            required: true,
            message: '请输入项目名称!',
          },
        ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='项目创建者'
          name={'projectCreator'}
          rules={[
          {
            required: true,
            message: '请输入项目创建者!',
          },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='项目备注'
        >
          <Input />
        </Form.Item>
        <Form.Item ><Button type='primary' htmlType='submit'>保存</Button></Form.Item>
      </Form>
    </Card>
  )
}

export default ProjectEdit