import React, {useEffect, useState} from "react";
import {Button} from "../../ayongUI/index.ts";

import './index.less'
import ReactMarkdown from 'react-markdown';
import {marked} from 'marked';

const ButtonPage = () => {
    const [theme, setTheme] = useState<string>('var(--light-a-color)')
    const [html, setHtml] = useState('');
    useEffect(() => {
        window.addEventListener('theme', (e) => {
            setTheme(e.detail.theme)
        });

        // 读取Markdown文件的内容
        fetch('/public/button.md') // 可以使用相对路径或完整URL
            .then((response) => response.text())
            .then((data) => {
                console.log(marked(data))
                setHtml(marked(data))
            })
            .catch((error) => console.error(error));
    }, [theme])
    const onClick = () => {
    }

    return (
        <div>

            <h1 onClick={onClick}>button</h1>
            {/*<div*/}
            {/*    dangerouslySetInnerHTML={{*/}
            {/*        __html: html,*/}
            {/*    }}*/}
            {/*/>*/}
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