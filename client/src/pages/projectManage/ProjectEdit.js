import React from 'react'
import { Button, Card, Form, Input } from 'antd'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import project_requests from '../../service/projectService'

function ProjectEdit() {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const [params] = useSearchParams()  
  const username = params.get('username')


    project_requests.getProjectById(projectId).then(res => {
      console.log('????')
      console.log(res)
    })

    
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    project_requests.updateProject(projectId, values)
    console.log(username)
    //console.log('????')
    //console.log(project)
    navigate('/?username='+username)
  }

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
          name='projectName'
          rules={[
            {
              required: true,
              message: 'project.projectName',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='项目创建者'
          name='projectCreator'
          rules={[
            {
              required: true,
              message: "project.projectCreator",
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item
          label='项目备注'
          name='projectNote'
          rules={[
            {
              required: true,
              message: "project.projectNote",
            },
          ]}
        ><Input />
        </Form.Item>
        <Form.Item ><Button type='primary' htmlType='submit'>保存</Button></Form.Item>
      </Form>
    </Card>
  )
}

export default ProjectEdit