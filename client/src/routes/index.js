import { Spin } from 'antd'
import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import FrontendAuth from '../util/FrontendAuth';

import Frame from '../components/Frame'

const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
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
                element: lazyload(<FrontendAuth><ProjectList /></FrontendAuth>)
            },
            { path: '/menu/project',element: lazyload(<ProjectCreat />) },
            { path: '/menu/project/:projectId',element: lazyload(<ProjectEdit />) },
            { path: '/menu/project/:projectId/apisList', element: lazyload(<ApiList />) },
            { path: '/menu/project/:projectId/api', element: lazyload(<ApiCreat />) },
            { path: '/menu/project/:projectId/api/:apiId', element: lazyload(<ApiEdit />) },
            { path: '/menu/sysConfig/person', element: lazyload(<Person />) },
            { path: '/menu/sysConfig/person/:personId', element: lazyload(<PersonEdit />) },
        ]
    },
    { path: '/login', element: lazyload(<Login />) },
    { path: '/register', element: lazyload(<Register />) },
    { path: '/404', element: lazyload(<PageNotFound />) },
    { path: '*', element: <Navigate to="/404" /> },
]



export default router