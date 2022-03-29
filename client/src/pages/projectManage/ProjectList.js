import React, { useState, useEffect } from 'react'
import project_requests from '../../service/projectService'
import { useNavigate } from 'react-router-dom'

import { Card, Table, Button, Popconfirm, message } from 'antd'

function ProjectList() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    project_requests.getProjects().then(res => { setProjects(res) })
  }, [])

  console.log('TCL: projectList -> projects', projects)

  const columns = [
    {
      title: '项目名称',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: '项目创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: '项目创建者',
      dataIndex: 'projectCreator',
      key: 'projectCreator',
    },
    {
      title: '项目备注',
      dataIndex: 'projectNote',
      key: 'projectNote',
    },
    {
      title: '操作',
      key: 'action',
      render: (record) => {
        return (
          <>
            <Button type="primary" style={{ margin: '0 0.2rem' }} onClick={() => { navigate(`/menu/project/${record._id}/apisList`) }}>查看</Button>
            <Button style={{ margin: '0 0.5rem' }} onClick={() => { navigate(`/menu/project/${record._id}`) }}>编辑</Button>
            <Popconfirm
              title="确定删除?"
              onConfirm={() => {
                console.log(record._id);
                project_requests.deleteProject(record._id).then(res => { setProjects(res) })
                message.success('已删除')
              }}
              onCancel={(e) => {
                console.log(e)
              }}
              okText="确定"
              cancelText="取消"
            >
              <Button danger>删除</Button>
            </Popconfirm>
          </>
        )
      },
    },
  ]
  return (
    <Card title="项目列表" extra={<Button type="primary" onClick={() => { navigate('/menu/project') }}>新建</Button>} style={{ width: '100%' }}>
      <Table columns={columns} dataSource={projects} rowKey={record => record._id} />
    </Card>
  )
}

export default ProjectList