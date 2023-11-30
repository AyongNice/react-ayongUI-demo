import React, {useState} from 'react';
// import {Button, Table} from "@/ayongUI/index.ts";
import {Button, Table, CodeDisplay} from "dist";

import './index.less';
import OmsSyntaxHighlight from '@/components/oms-syntax-high-light/oms-syntax-high-light.tsx';
import TitleCom from '@/components/title-com/title-com.tsx';
import codeDemo from './code-demo.ts';
import ConditionalRender from '@/components/conditional-render/conditional-render.tsx';
import global from '@/config/index.ts';
import {useGlobalState} from '@/data-store/index.ts';
import style from "./index.module.less";

const ButtonPage = () => {
    const [theme, setTheme] = useGlobalState('theme');

    const [unfold, setUnfold] = useState<boolean>(true);

    /** 展开/折叠示例 **/
    const onUnfold = (): void => {
        setUnfold(!unfold);
    };

    const onClick = (): void => {
    };
    const [expandedItems, setExpandedItems] = useState<number[]>([]);
    const list = [
        1, 2, 3, 4,
    ]
    const handleItemClick = (itemId: number) => {
        if (expandedItems?.includes(itemId)) {
            // 如果项目已经展开，关闭它
            setExpandedItems(expandedItems.filter(id => id !== itemId));
        } else {
            // 如果项目未展开，展开它
            setExpandedItems([...expandedItems, itemId]);
        }
    };

    const handleExpandAll = () => {
        // 展开所有项目
        // 这里假设你有一个项目列表的数组，每个项目都有一个唯一的id
        setExpandedItems(list);
        if (expandedItems.length === list.length) {
            setExpandedItems([]);
        } else {
            setExpandedItems(list);
        }
    };

    return (
        <div>

            <TitleCom title='button' onUnfold={handleExpandAll}/>
            <fieldset>
                <legend>type 类型 设置</legend>
                <Button className={style.button}>默认类型</Button>
                <Button className={style.button} type='dashed'>dashed-虚线按钮</Button>
                <Button className={style.button} type='primary'>primary-主题按钮</Button>
                <Button className={style.button} type='error'>dangerous-危险按钮</Button>
                <Button className={style.button} type='warn'>warn-警告按钮</Button>
                <Button className={style.button} type='safe'>safe-安全按钮</Button>

                <ConditionalRender show={expandedItems.includes(1)}>
                    <OmsSyntaxHighlight textContent={codeDemo.typeSetingcodeConut}/>
                </ConditionalRender>
                <div className={style.unfold}>
                    <CodeDisplay onClick={() => handleItemClick(1)}/>
                </div>

            </fieldset>

            <fieldset>
                <legend>shape 形状 设置</legend>
                <Button className={style.button}>默认-按钮</Button>
                <Button className={style.button} shape='strong'>直角-按钮</Button>
                <Button className={style.button} shape='round'>round-椭圆钮</Button>
                <Button className={style.button} type='primary' href='https://github.com/AyongNice/ayongUI'>
                    href-跳转按钮
                </Button>

                <ConditionalRender show={expandedItems.includes(2)}>
                    <OmsSyntaxHighlight textContent={codeDemo.shapeSetingcodeConut}/>
                </ConditionalRender>
                <div className={style.unfold}>
                    <CodeDisplay onClick={() => handleItemClick(2)}/>
                </div>

            </fieldset>
            <fieldset>
                <legend>自定义 className 样式</legend>
                <Button onClick={onClick} className='diy'>
                    自定义样式
                </Button>

                <ConditionalRender show={expandedItems.includes(3)}>
                    <OmsSyntaxHighlight textContent={codeDemo.classNameSetingcodeConut}/>
                </ConditionalRender>
                <div className={style.unfold}>
                    <CodeDisplay onClick={() => handleItemClick(3)}/>
                </div>

            </fieldset>

            <fieldset>
                <legend>设置防抖 1000毫秒</legend>
                <Button type='primary' onClick={onClick} time={1000}>
                    small-ayongUI
                </Button>
                <ConditionalRender show={expandedItems.includes(4)}>
                    <OmsSyntaxHighlight textContent={codeDemo.debounceSetingcodeConut}/>
                </ConditionalRender>
                <div className={style.unfold}>
                    <CodeDisplay onClick={() => handleItemClick(4)}/>
                </div>

            </fieldset>

            <h2>Porps 介绍</h2>
            <Table
                className={`table-theme-${theme}`}
                columns={global.columns}
                data={codeDemo.data}
            />
        </div>
    );
};
export default ButtonPage;
