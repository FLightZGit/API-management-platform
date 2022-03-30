import React from 'react'
import { Button, Card, Form, Input } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'

import api_requests from '../../service/apiService';


function ApiEdit() {
  const navigate = useNavigate();
  const { projectId, apiId } = useParams()

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    api_requests.updateApi(projectId, apiId, values)
    navigate(`/menu/project/${projectId}/apisList`)
  };

  return (
    <Card title='编辑Api'>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label='Api名称'
          name='apiName'
          rules={[
            {
              required: true,
              message: '请输入Api名称!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Api地址'
          name='apiAdress'
          rules={[
            {
              required: true,
              message: '请输入Api地址!',
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='Api请求方法'
          name='apiRequestMethod'
          rules={[
            {
              required: true,
              message: '请输入Api请求方法!',
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='Api参数'
          name='apiParameters'
          rules={[
            {
              required: true,
              message: '请输入Api参数!',
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='Api返回值'
          name='apiReturn'
          rules={[
            {
              required: true,
              message: '请输入Api返回值!',
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='Api分组'
          name='apiGroup'
          rules={[
            {
              required: true,
              message: '请输入Api分组!',
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='Api创建者'
          name='apiCreator'
          rules={[
            {
              required: true,
              message: '请输入Api创建者!',
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='Api备注'
          name='apiNote'
          rules={[
            {
              required: true,
              message: '请输入Api备注!',
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item ><Button type='primary' htmlType='submit'>保存</Button></Form.Item>
      </Form>
    </Card>
  )
}

export default ApiEdit