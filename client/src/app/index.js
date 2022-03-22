import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { Frame } from '../components/index'

import { menuRoutes } from '../routes/index'

import 'antd/dist/antd.min.css'
import '../style/App.css'

function App() {
  return (
    <Frame>
      <Routes>
        {menuRoutes.map(menuRoute => {
          return (menuRoute.subMenu.map(route => {
            return <Route key={route.path} element={route.element} path={route.path} />
          }))
        })}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Frame>
  )
}

export default App