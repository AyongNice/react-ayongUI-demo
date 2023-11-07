import {useDebounce} from "../../ayongUI/utils";

const typeSetingcodeConut = `
import React from 'react';
import { Button, Flex } from 'ayongUI';
const App = () => (
              <fieldset>
                <Button>默认类型</Button>
                <Button type="dashed">dashed-虚线按钮</Button>
                <Button type="primary">primary-主题按钮</Button>
                <Button type="dangerous">dangerous-危险按钮</Button>
                <Button type="warn">warn-警告按钮</Button>
                <Button type="safe">safe-安全按钮</Button>
             </fieldset>
);
export default App;`

const shapeSetingcodeConut = `
import React from 'react';
import { Button, Flex } from 'ayongUI';
const App = () => (
              <fieldset>
                <legend>shape 形状 设置</legend>
                <Button shape='strong'>直角-按钮</Button>
                <Button shape='round'>round-椭圆钮</Button>
                <Button type="primary" href='https://github.com/AyongNice/ayongUI'>href-跳转按钮</Button>
            </fieldset>
);
export default App;`


const sizeSetingcodeConut = `
import React from 'react';
import { Button, Flex } from 'ayongUI';
const App = () => (
               <fieldset>
                <legend>大小 size 设置</legend>
                <Button type="primary" size='small'>small-ayongUI</Button>
                <Button type="primary" size='default'>default-ayongUI</Button>
                <Button type="primary" size='large'>large-ayongUI</Button>
            </fieldset>
);
export default App;`


const classNameSetingcodeConut = `
import React from 'react';
import { Button, Flex } from 'ayongUI';
const App = () => (
             <fieldset>
                <legend>自定义 className 样式</legend>
                <Button type="primary" onClick={onClick} className='diy'>small-ayongUI</Button>
            </fieldset>
);
export default App;`

const debounceSetingcodeConut = `
import React from 'react';
import { Button, Flex } from 'ayongUI';
const App = () => (
             <fieldset>
                <legend>设置防抖 1000毫秒</legend>
                <Button type="primary" onClick={onClick} time={1000}>small-ayongUI</Button>
            </fieldset>
);
export default App;`


const data = [
    {
        key: '1',
        name: 'type',
        illustrate: '按钮类型 \'primary\' | \'default\' | \'dashed\' ',
        defaultValue: 'default',
        type: 'string',
        version: '1.0'
    },
    {
        key: '2',
        name: 'time',
        illustrate: '防抖时间设置 0 为不防抖 ',
        defaultValue: '-',
        type: 'number',
        version: '1.0'
    },
    {
        key: '3',
        name: 'size',
        illustrate: '按钮大小 \'large\' | \'default\' | \'small\' ',
        defaultValue: 'default',
        type: 'string',
        version: '1.0'
    },
    {
        key: '4',
        name: 'shape',
        illustrate: '按钮形状 \'circle\' | \'default\' | \'round\' ',
        defaultValue: 'default',
        type: 'string',
        version: '1.0'
    },
    {
        key: '5',
        name: 'htmlType',
        illustrate: '原生button类型 ',
        defaultValue: 'button',
        type: 'string',
        version: '1.0'
    },

];

export default {
    data,
    typeSetingcodeConut,
    shapeSetingcodeConut,
    sizeSetingcodeConut,
    classNameSetingcodeConut,
    debounceSetingcodeConut
}
