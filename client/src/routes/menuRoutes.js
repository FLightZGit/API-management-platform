import { ApiList, Person } from "../pages/index";
import { AlignLeftOutlined, ControlOutlined } from '@ant-design/icons';

const menuRoutes = [
    {
        key: 'menu1',
        title: 'API管理',
        icon: <AlignLeftOutlined />,
        subMenu: [{
            name: 'API列表',
            path: '/menu/apisList',
            element: <ApiList />,
        },
        ]
    }, {
        key: 'menu2',
        title: '系统设置',
        icon: <ControlOutlined />,
        subMenu: [{
            name: '管理员',
            path: '/menu/sysConfig/person',
            element: <Person />
        },
        ]
    }
]

export default menuRoutes