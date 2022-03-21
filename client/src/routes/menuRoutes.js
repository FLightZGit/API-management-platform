import { List, Edit, Person } from "../pages/index";
import {
    AlignLeftOutlined,
    ControlOutlined
} from '@ant-design/icons';

const menuRoutes = [
    {
        key: 'menu1',
        title: 'API管理',
        icon: <AlignLeftOutlined />,
        subMenu: [{
            name: 'API列表',
            path: '/admin/apisList',
            element: <List />,
        }, {
            name: 'API编辑',
            path: '/admin/apisList/edit/:id',
            element: <Edit />
        }]

    }, {
        key: 'menu2',
        title: '系统设置',
        icon: <ControlOutlined />,
        subMenu: [
            {
                name: '管理员',
                path: '/admin/sysConfig/person',
                element: <Person />
            }
        ]
    }
]

export default menuRoutes