import { Spin } from 'antd'
import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import { Frame } from '../components/index'

const Login = lazy(() => import('../pages/Login'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const ProjectList = lazy(() => import('../pages/projectManage/ProjectList'))
const ProjectCreat = lazy(() => import('../pages/projectManage/ProjectCreat'))
const ProjectEdit = lazy(() => import('../pages/projectManage/ProjectEdit'))
const ApiList = lazy(() => import('../pages/apiManage/ApiList'))
const ApiEdit = lazy(() => import('../pages/apiManage/ApiEdit'))
const ApiCreat = lazy(() => import('../pages/apiManage/ApiCreat'))
const Person = lazy(() => import('../pages/sysConfig/Person'))
const PersonEdit = lazy(() => import('../pages/sysConfig/PersonEdit'))

const lazyload = (children) => {
    return <Suspense fallback={<Spin />}>
        {children}
    </Suspense>
}

const router = [
    {
        path: '/',
        element: <Frame />,
        children: [
            {
                index: true,
                element: lazyload(<ProjectList />)
            },
            { path: '/menu/projectsList/creat', element: lazyload(<ProjectCreat />) },
            { path: '/menu/projectDetail/:projectId/edit', element: lazyload(<ProjectEdit />) },
            { path: '/menu/projectDetail/:projectId/apisList', element: lazyload(<ApiList />) },
            { path: '/menu/projectDetail/:projectId/apisList/creat', element: lazyload(<ApiCreat />) },
            { path: '/menu/projectDetail/:projectId/apiDetail/:apiId/edit', element: lazyload(<ApiEdit />) },
            { path: '/menu/sysConfig/person', element: lazyload(<Person />) },
            { path: '/menu/sysConfig/person/edit', element: lazyload(<PersonEdit />) },
        ]
    },
    { path: '/login', element: lazyload(<Login />) },
    { path: '/404', element: lazyload(<PageNotFound />) },
    { path: '*', element: <Navigate to="/404" /> },
]

export default router