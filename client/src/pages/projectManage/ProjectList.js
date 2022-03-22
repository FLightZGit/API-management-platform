import React, { useState, useEffect } from 'react'
import { project_requests } from '../../service/index';
import { useNavigate } from 'react-router-dom'

import { Card, Table, Button, Popconfirm, message } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('已删除');
}

function cancel(e) {
  console.log(e);
}

function ProjectList() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    project_requests.getProjects().then(res => { setProjects(res) })
  }, []);

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
      dataIndex: 'projectOwner',
      key: 'projectOwner',
    },
    {
      title: '项目备注',
      dataIndex: 'projectNote',
      key: 'projectNote',
    },
    {
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <>
            <Button type="primary" style={{ margin: '0 0.2rem' }} onClick={() => { navigate('/menu/apisList') }}>查看</Button>
            <Button style={{ margin: '0 0.5rem' }} onClick={() => { navigate('/menu/projectList/edit/:id') }}>编辑</Button>
            <Popconfirm
              title="确定删除?"
              onConfirm={confirm}
              onCancel={cancel}
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
    <Card title="项目列表" extra={<Button type="primary" onClick={() => { navigate('/menu/projectList/creat') }}>新建</Button>} style={{ width: '100%' }}>
      <Table columns={columns} dataSource={projects} rowKey={record => record._id} />
    </Card>
  )
}

export default ProjectList