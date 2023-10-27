import React from "react";
import {Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Button from "../button/button"

const MenuList = () => {
    const list = [{title: '按钮组件', path: '/button'}]

    return (
        <div>
            {
                list.map((_, i) => {
                    return (<div key={i}>
                        <Link to={_.path}>{_.title}</Link>
                    </div>)
                })
            }
            {/*重定向*/}
            <Navigate to="/button"/>
            <Outlet/>
        </div>
    )
}
export default MenuList