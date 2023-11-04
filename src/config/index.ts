import {Menu} from "../type";

/**
 * 菜单列表
 */
const MENULIST: Menu[] = [
    {title: '按钮组件', path: '/button', id: +new Date() + ''},
    {title: '表格组件', path: '/table', id: +new Date() + ''},
    {title: 'icon组件', path: '/icon', id: +new Date() + ''},
]

const THEME: string[] = ['night', 'light'];//白天 .晚上主题
export default {
    MENULIST,
    THEME
}