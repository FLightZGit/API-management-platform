import { AlignLeftOutlined, ControlOutlined } from '@ant-design/icons';

const menuRoutes = [
    {
        key: 'menu1',
        title: '项目管理',
        icon: <AlignLeftOutlined />,
        subMenu: [{
            name: '项目列表',
            path: '/',
        },
        ]
    }, {
        key: 'menu2',
        title: '系统设置',
        icon: <ControlOutlined />,
        subMenu: [{
            name: '管理员',
            path: '/menu/sysConfig/person',
        },
        ]
    }
]

export default menuRoutes