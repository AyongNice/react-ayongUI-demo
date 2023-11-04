import React, {useEffect, useState} from "react";
import {Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import menu from './menu.module.less'
import '../../App.css'
import globle from "../../config/index.ts";

const MenuList = () => {
    const [theme, setTheme] = useState<string>('var(--light-a-color)')
    useEffect(() => {
        window.addEventListener('theme', (e) => {
            console.log(e.detail.theme)
            setTheme(e.detail.theme)
        });
    }, [])

//下载less 和 less-loader
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

            {/*重定向*/
            }
            {/*<Navigate to="/button" replace={true}/>*/}
            <div className={menu.qutlet}>
                <Outlet/>
            </div>

        </div>
    )
}
export default MenuList