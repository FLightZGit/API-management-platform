import React, { useState, useEffect, useRef } from 'react'
import { Card, Table, Button, Popconfirm, message,Input, Space } from 'antd';
import { useNavigate, useParams } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons';

import api_requests from '../../service/apiService';
let count = 0;

function ApiList() {
  const navigate = useNavigate()
  const { projectId } = useParams()

  const [apis, setApis] = useState([]);
  //let groupArray = JSON.parse(localStorage.getItem("Group"));

  useEffect(() => {
    api_requests.getApis(projectId).then(res => { setApis(res); count = res.length})
  }, [projectId]);

  console.log('TCL: apiList -> apis', apis)

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });
  const columns = [
    {
      title: 'api名称',
      dataIndex: 'apiName',
      key: 'apiName',
      ...getColumnSearchProps('apiName')
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
      title: 'api分组',
      dataIndex: 'apiGroup',
      key: 'apiGroup',
      ...getColumnSearchProps('apiGroup')
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
      <Table columns={columns} dataSource={apis} rowKey={record => record._id} pagination={{total:count,pageSize:5}}/>
    </Card>
  )
}

export default ApiList