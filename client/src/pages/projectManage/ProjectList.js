import React, { useState, useEffect } from 'react'
import project_requests from '../../service/projectService'
import { useNavigate, useSearchParams} from 'react-router-dom'

import { Card, Table, Button, Popconfirm, message,Input } from 'antd'
const { Search } = Input;

function ProjectList() {

  const navigate = useNavigate() 
  //const username = params.get('username')
  const username = localStorage.getItem('username')
  const [projects, setProjects] = useState([]);
  let projectName = null
  
  useEffect(() => {
      console.log(username)
      project_requests.getProjectByUserName(username).then(res => { setProjects(res) })
      
      //project_requests.getProjects().then(res => { setProjects(res) })
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
            <Button style={{ margin: '0 0.5rem' }} onClick={() => { navigate(`/menu/project/${record._id}?username=`+username) }}>编辑</Button>
            <Popconfirm
              title="确定删除?"
              onConfirm={() => {
                console.log(record._id);
                //project_requests.deleteProject(record._id).then(res => { setProjects(res) })
                project_requests.deleteProject(record._id)
                message.success('已删除')
                window.location.reload()
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
    <Card title="项目列表" extra={ <>
      <Button type="primary" onClick={() => { navigate('/menu/project?username=' + username) }}>新建</Button>
      
     </>
    } 
      style={{ width: '100%' }}>
      <Search placeholder="输入项目名" enterButton="搜索" style={{ width: '30%'}} size="large" 
      onChange={(e)=>{
        projectName=e.target.value
      }} 
      onSearch={() =>{
        if(!projectName){
          window.location.reload()
        } else {
          project_requests.getProjectByProjectName({projectname:projectName}).then(
          res => {
            console.log(projectName)
            setProjects(res.projects)
          }
        )
        }
        
      }}/>
      <Table columns={columns} dataSource={projects} rowKey={record => record._id} />
    </Card>
  )
}

export default ProjectList