import React, { useState, useEffect } from 'react'
import api_requests from '../../service/apiService';
import { Card, Table, Button } from 'antd';

function List() {
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
            <Button type="primary" style={{ margin: '0 0.5rem' }}>编辑</Button>
            <Button danger>删除</Button>
          </>)
      },
    },
  ]

  return (
    <Card title="API列表" extra={<a href="#">新建</a>} style={{ width: '100%' }}>
      <Table columns={columns} dataSource={apis} rowKey={record => record._id} />
    </Card>
  )
}

export default List