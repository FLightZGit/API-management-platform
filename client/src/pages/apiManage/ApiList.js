import React, { useState, useEffect } from 'react'
import api_requests from '../../service/apiService';
import { useNavigate } from 'react-router-dom'

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
  const [apis, setApis] = useState([]);

  useEffect(() => {
    api_requests.getApis().then(res => { setApis(res) })
  }, []);

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
            <Popconfirm
              title="确定删除?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="确定"
              cancelText="取消"
            >
              <Button type="primary" style={{ margin: '0 0.5rem' }}>编辑</Button>
              <Button danger>删除</Button>
            </Popconfirm>
          </>
        )
      },
    },
  ]

  return (
    <Card title="API列表" extra={<Button type="primary" onClick={() => { navigate('/admin/apisList/creat') }}>新建</Button>} style={{ width: '100%' }}>
      <Table columns={columns} dataSource={apis} rowKey={record => record._id} />
    </Card>
  )
}

export default ApiList