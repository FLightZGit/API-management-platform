import React from 'react'
import { Card, Avatar } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

function Person() {
  const navigate = useNavigate()
  const { Meta } = Card;
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" onClick={() => { navigate('/menu/sysConfig/person/edit') }}/>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={localStorage.getItem("username")}
        description="账号信息"
      />
    </Card>
  )
}

export default Person