import React, { useState, useEffect } from 'react'
import api_requests from '../../service/apiService';
import { useNavigate, useParams } from 'react-router-dom'

import { Card, Table, Button, Popconfirm, message } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('已删除');
}

function cancel(e) {
  console.log(e);
}

function ApiList() {
  const navigate = useNavigate()
  const { projectID } = useParams()

  console.log(projectID)

  const [apis, setApis] = useState([]);

  useEffect(() => {
    api_requests.getApis(projectID).then(res => { setApis(res) })
  }, [projectID]);

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
      dataIndex: 'apiResponse',
      key: 'apiResponse',
    },
    {
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <>
            <Button type="primary" style={{ margin: '0 0.2rem' }} onClick={() => { navigate('/menu/project/:projectId/api/:apiId') }}>编辑</Button>
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
    <Card title="API列表" extra={<Button type="primary" onClick={() => { navigate('/menu/project/:projectId/api') }}>新建</Button>} style={{ width: '100%' }}>
      <Table columns={columns} dataSource={apis} rowKey={record => record._id} />
    </Card>
  )
}

export default ApiList