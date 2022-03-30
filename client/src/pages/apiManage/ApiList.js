import React, { useState, useEffect } from 'react'
import { Card, Table, Button, Popconfirm, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom'

import api_requests from '../../service/apiService';

function ApiList() {
  const navigate = useNavigate()
  const { projectId } = useParams()

  const [apis, setApis] = useState([]);

  useEffect(() => {
    api_requests.getApis(projectId).then(res => { setApis(res) })
  }, [projectId]);

  console.log('TCL: apiList -> apis', apis)

  const columns = [
    {
      title: 'api名称',
      dataIndex: 'apiName',
      key: 'apiName',
    },
    {
      title: 'api地址',
      dataIndex: 'apiAdress',
      key: 'apiAdress',
    },
    {
      title: 'api请求方法',
      dataIndex: 'apiRequestMethod',
      key: 'apiRequestMethod',
    },
    {
      title: 'api参数',
      dataIndex: 'apiParameters',
      key: 'apiParameters',
      render: apiParameters => (
        <>
          {apiParameters.map(apiParameter => <span key={apiParameter}>{apiParameter}</span>)}
        </>
      )
    },
    {
      title: 'api返回参数',
      dataIndex: 'apiReturn',
      key: 'apiReturn',
    },
    {
      title: 'api备注',
      dataIndex: 'apiNote',
      key: 'apiNote',
    },
    {
      title: '操作',
      key: 'action',
      render: (record) => {
        return (
          <>
            <Button type="primary" style={{ margin: '0 0.2rem' }} onClick={() => { navigate(`/menu/project/${projectId}/api/${record._id}`) }}>编辑</Button>
            <Popconfirm
              title="确定删除?"
              onConfirm={() => {
                console.log(record._id);
                api_requests.deleteApi(projectId, record._id).then(res => { setApis(res) })
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
    <Card title="API列表" extra={<Button type="primary" onClick={() => { navigate(`/menu/project/${projectId}/api`) }}>新建</Button>} style={{ width: '100%' }}>
      <Table columns={columns} dataSource={apis} rowKey={record => record._id} />
    </Card>
  )
}

export default ApiList