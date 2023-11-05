import React, {useEffect, useState} from "react";
import {Button} from "../../ayongUI/index.ts";

import './index.less'

const ButtonPage = () => {
    const [theme, setTheme] = useState<string>('var(--light-a-color)')
    useEffect(() => {
        window.addEventListener('theme', (e) => {
            setTheme(e.detail.theme)
        });
    }, [theme])
    const onClick = () => {
    }

    return (
        <div>

            <h1 onClick={onClick}>button</h1>

            <fieldset>
                <legend>type 类型 设置</legend>
                <Button>默认类型</Button>
                <Button type="dashed">dashed-虚线按钮</Button>
                <Button type="primary">primary-主题按钮</Button>
                <Button type="dangerous">dangerous-危险按钮</Button>
                <Button type="warn">warn-警告按钮</Button>
                <Button type="safe">safe-安全按钮</Button>
            </fieldset>

            <fieldset>
                <legend>shape 形状 设置</legend>
                <Button shape='strong'>直角-按钮</Button>
                <Button shape='round'>round-椭圆钮</Button>
                <Button type="primary" href='https://github.com/AyongNice/ayongUI'>href-跳转按钮</Button>
            </fieldset>

            <fieldset>
                <legend>大小 size 设置</legend>
                <Button type="primary" size='small'>small-ayongUI</Button>
                <Button type="primary" size='default'>default-ayongUI</Button>
                <Button type="primary" size='large'>large-ayongUI</Button>
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