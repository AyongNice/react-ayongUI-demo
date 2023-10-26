import React from "react";
import {Link} from "react-router-dom";

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
        </div>
    )
}
export default MenuList