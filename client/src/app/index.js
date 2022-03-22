import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Login, PageNotFound } from "../pages/index"

import { Frame } from '../components/index'
import { ProjectList, ProjectCreat, ProjectEdit, ApiList, ApiEdit, ApiCreat, Person, PersonEdit } from '../pages/index'

import 'antd/dist/antd.min.css'
import '../style/App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Frame />}>
        <Route index element={<ProjectList />} />
        <Route path='/menu/projectList/creat' element={<ProjectCreat />} />
        <Route path='/menu/projectList/edit/:id' element={<ProjectEdit />} />
        <Route path='/menu/apisList' element={<ApiList />} />
        <Route path='/menu/apisList/creat' element={<ApiCreat />} />
        <Route path='/menu/apisList/edit/:id' element={<ApiEdit />} />
        <Route path='/menu/sysConfig/person' element={<Person />} />
        <Route path='/menu/sysConfig/person/edit' element={<PersonEdit />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/404' element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default App