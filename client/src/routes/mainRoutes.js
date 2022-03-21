import { Login, PageNotFound } from "../pages/index"


const mainRoutes = [{
    path: '/login',
    element: <Login />
}, {
    path: '/404',
    element: <PageNotFound />
}]

export default mainRoutes