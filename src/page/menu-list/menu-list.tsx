import React from "react";
import {Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Button from "../button/button"
import menu from './menu.module.less'

import globle from "../../config/index.ts";

const MenuList = () => {
//下载less 和 less-loader
    return (
        <div className={menu.warp}>
            <div className={menu.leftNav}>
                {
                    globle.MENULIST.map((_, i) => {
                        return (
                            <div key={i}>
                                <Link to={'/menu' + _.path}>{_.title}</Link>
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