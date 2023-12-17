import React, {useEffect, useState} from 'react';
// import {Button, Table} from "@/ayongUI/index.ts";
import {Button, Select, Table} from "@/ayongUI/index.ts";

import './index.less';

import TitleCom from '@/components/title-com/title-com.tsx';
import codeDemo from './code-demo.ts';

import global from '@/config/index.ts';
import {useGlobalState} from '../../data-store/index.ts';
import style from "./index.module.less";
import useExpandableList from "@/components/code-display/index.ts";
import CodeDisplayCom from "@/components/code-display/code-display.tsx";

const ButtonPage = () => {
    const [theme] = useGlobalState('theme');
    const onClick = (): void => {
    };

    const {expandedItems, handleExpandAll} = useExpandableList([1, 2, 3, 4]);
    const handleChange = (value: any) => {
        // console.log(`selected ${value}`);
    };
// .filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div>

            <TitleCom title='button' onUnfold={handleExpandAll}/>

            <fieldset>
                <legend>type 类型 设置</legend>
                <Button onClick={onClick} className={style.button}>默认类型</Button>
                <div style={{display: "flex"}}>

                    <Select
                        defaultValue={"jack"}
                        style={{width: 150}}
                        onChange={handleChange}
                        options={[
                            {value: 'jack', label: 'Jack'},
                            {value: 'lucy', label: 'Lucy'},
                            {value: 'Yiminghe', label: 'yiminghe'},
                            {value: 'ayong', label: 'ayong'},
                            {value: 'ui-com', label: 'ui-com'},
                            {value: 'disabled', label: 'Disabled', disabled: true},
                        ]}
                    />
                </div>

                <Button className={style.button} type='dashed'>dashed-虚线按钮</Button>
                <Button className={style.button} type='primary'>primary-主题按钮</Button>
                <Button className={style.button} type='error'>dangerous-危险按钮</Button>
                <Button className={style.button} type='warn'>warn-警告按钮</Button>
                <Button className={style.button} type='safe'>safe-安全按钮</Button>


                <CodeDisplayCom textContent={codeDemo.typeSetingcodeConut} keyIndex={1} list={expandedItems}/>
            </fieldset>

            <fieldset>
                <legend>shape 形状 设置</legend>
                <Select
                    defaultValue={["lucy", "jack"]}
                    style={{width: 300}}
                    clearable
                    onChange={handleChange}
                    options={[
                        {value: 'jack', label: 'Jack'},
                        {value: 'lucy', label: 'Lucy'},
                        {value: 'Yiminghe', label: 'yiminghe'},
                        {value: 'ayong', label: 'ayong'},
                        {value: 'ui-com', label: 'ui-com'},
                        {value: 'ayong5', label: 'ayong5'},
                        {value: 'ayong1', label: 'ayong1'},
                        {value: 'ayong2', label: 'ayong2'},
                        {value: 'ayong3', label: 'ayon3'},
                        {value: 'disabled', label: 'Disabled', disabled: true},
                    ]}
                />
                <Button className={style.button}>默认-按钮</Button>
                <Button className={style.button} shape='strong'>直角-按钮</Button>
                <Button className={style.button} shape='round'>round-椭圆钮</Button>
                <Button className={style.button} type='primary' href='https://github.com/AyongNice/ayongUI'>
                    href-跳转按钮
                </Button>
                <CodeDisplayCom textContent={codeDemo.shapeSetingcodeConut} keyIndex={2} list={expandedItems}/>

            </fieldset>
            <fieldset>
                <legend>自定义 className 样式</legend>
                <Button onClick={onClick} className='diy'>
                    自定义样式
                </Button>

                <CodeDisplayCom textContent={codeDemo.shapeSetingcodeConut} keyIndex={3} list={expandedItems}/>

            </fieldset>

            <fieldset>
                <legend>设置防抖 1000毫秒</legend>
                <Button type='primary' onClick={onClick} time={1000}>
                    small-ayongUI
                </Button>
                <CodeDisplayCom textContent={codeDemo.debounceSetingcodeConut} keyIndex={4} list={expandedItems}/>

            </fieldset>

            <h2>Porps 介绍</h2>
            <Table
                className='table-theme'
                columns={global.columns}
                data={codeDemo.data}
            />
        </div>
    );
};
export default ButtonPage;
