import React from "react";
import {Button} from "../../ayongUI/index.ts";

// import {Button} from 'antd'
import './index.less'

const ButtonPage = () => {

    const onClick = () => {
        console.log(111)
    }

    return (
        <div>
            <h1 onClick={onClick}>button</h1>

            <fieldset>
                <legend>type 类型 设置</legend>
                <Button className='left'>默认类型</Button>
                <Button type="dashed" className='left'>dashed-虚线按钮</Button>
                <Button type="primary" className='left'>primary-主题按钮</Button>
                <Button type="dangerous" className='left'>dangerous-危险按钮</Button>
                <Button type="warn" className='left'>warn-警告按钮</Button>
                <Button type="safe" className='left'>safe-安全按钮</Button>
            </fieldset>

            <fieldset>
                <legend>大小 size 设置</legend>
                <Button type="primary" className='left' size='small'>small-ayongUI</Button>
                <Button type="primary" className='left' size='default'>default-ayongUI</Button>
                <Button type="primary" className='left' size='large'>large-ayongUI</Button>
            </fieldset>

            <fieldset>
                <legend>自定义 className 样式</legend>
                <Button type="primary" onClick={onClick} className='diy'>small-ayongUI</Button>
            </fieldset>

            <fieldset>
                <legend>设置防抖 1000毫秒</legend>
                <Button type="primary" onClick={onClick} time={1000}>small-ayongUI</Button>
            </fieldset>
        </div>
    )
}
export default ButtonPage