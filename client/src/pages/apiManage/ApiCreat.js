import React , { useState }from 'react'
import { Button, Card, Form, Input, Select, Divider, Space, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

import api_requests from '../../service/apiService';
const { Option } = Select;
let index =0 ;
function ApiCreat() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  let groupArray = JSON.parse(localStorage.getItem('Group'))
  const [items, setItems] = useState([...groupArray]);
  const [name, setName] = useState('');

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `分组 ${index++}`]);
    console.log(name)
    groupArray = JSON.parse(localStorage.getItem('Group'))
    groupArray.push(name);
    console.log(groupArray);
    localStorage.setItem("Group", JSON.stringify(groupArray));
    if(name){
    }else {

    }
    setName('');
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    api_requests.createApi(projectId,values)
    navigate(`/menu/project/${projectId}/apisList`)
  };

  return (
    <Card title='新建Api'>
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
        >
          <Select
      style={{
        width: 300,
      }}
      placeholder="新建分组"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '8px 0',
            }}
          />
          <Space
            align="center"
            style={{
              padding: '0 8px 4px',
            }}
          >
            <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
            <Typography.Link
              onClick={addItem}
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              <PlusOutlined /> 新建分组
            </Typography.Link>
          </Space>
        </>
      )}
    >
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
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
        ><Input placeholder = {localStorage.getItem('username')}/>
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

export default ApiCreat