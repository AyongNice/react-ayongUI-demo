import {Menu} from '../type';

/**
 * 菜单列表
 */
const MENULIST: Menu[] = [
    {title: '按钮组件', path: '/button', id: +new Date() + ''},
    {title: '表格组件', path: '/table', id: +new Date() + ''},
    {title: 'icon组件', path: '/icon', id: +new Date() + ''},
    {title: 'switch', path: '/switch', id: +new Date() + ''},
    {title: 'radio组件', path: '/radio', id: +new Date() + ''},
    {title: 'input组件', path: '/input', id: +new Date() + ''},
    {title: 'tooltip组件', path: '/tooltip', id: +new Date() + ''},
    {title: 'Message全局提示', path: '/message', id: +new Date() + ''},
    {title: 'Rate评分', path: '/rate', id: +new Date() + ''},

];

const THEME: string[] = ['night', 'light']; //白天 .晚上主题

//Props 属性 说明columns
const columns = [
    {
        title: '属性名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '说明',
        dataIndex: 'illustrate',
        key: 'illustrate',
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '默认值',
        dataIndex: 'defaultValue',
        key: 'defaultValue',
    },
    {
        title: '版本',
        dataIndex: 'version',
        key: 'version',
    },
];
export default {
    MENULIST,
    THEME,
    columns,
};
