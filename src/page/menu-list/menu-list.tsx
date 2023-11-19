import {Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import menu from './menu.module.less'
import '../../App.less'
import globle from "../../config/index.ts";
import {useGlobalState} from "../../data-store";

const MenuList = () => {
    const [theme, setTheme] = useGlobalState('theme');

    return (
        <div className={menu.warp}>
            <div className={menu.leftNav}>
                {
                    globle.MENULIST.map((_, i) => {
                        return (
                            <div key={i}>
                                <Link className={theme} to={'/menu' + _.path}>{_.title}</Link>
                            </div>
                        )
                    })
                }
            </div>

            <div className={menu.qutlet}>
                <Outlet/>
            </div>

        </div>
    )
}
export default MenuList