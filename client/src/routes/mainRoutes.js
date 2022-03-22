import { ApiEdit, ApiCreat, } from "../pages/index";
import { Login, PageNotFound } from "../pages/index"


const mainRoutes = [{
    path: '/login',
    element: <Login />
}, {
    path: '/404',
    element: <PageNotFound />
}, {
    path: '/admin/apisList/edit/:id',
    element: <ApiEdit />
}, {
    path: '/admin/apisList/creat',
    element: <ApiCreat />
},

]

export default mainRoutes