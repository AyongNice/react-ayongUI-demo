import {useDebounce} from "../../ayongUI/utils";
import {Table} from "../../ayongUI";
import React from "react";
import ConditionalRender from "@/components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "@/components/oms-syntax-high-light/oms-syntax-high-light.tsx";
import {DataItem} from "@/ayongUI/components/table/index.tsx";

const deft: string = `
import {Rate} from 'ayongUI';

const App = () => (
      <Rate   value={3}/>
);
export default App;
`

const showClose: string = `
import {Button, Message} from 'ayongUI';

 const App = () => (
     <Button className='button-mes' onClick={onMessage}>info-消息</Button>
   );
export default App;                
`

const disabled: string = `
import {Rate} from 'ayongUI';

const App = () => {
 
    return (<Rate disabled value={3}/>)
}

export default App;   
`
const color: string = `
import {Rate} from 'ayongUI';

const App = () => {

    return ( <Rate color='#cbbcf7' value={3}/>)
}
export default App; 
`
const diyIcon: string = `
import  { Rate, Alert}  from 'ayongUI';

const App = () => {

    return (   <Rate value={3}   icon={Alert}/>)
}
export default App; 
`
const data = [
    {
        key: '1',
        name: 'count',
        illustrate: '评分数量',
        defaultValue: '5',
        type: 'number',
        version: '1.0'
    },
    {
        key: '2',
        name: 'color',
        illustrate: '自定义高亮颜色',
        defaultValue: 'gold',
        type: 'boolean',
        version: '1.0'
    },
    {
        key: '3',
        name: 'value',
        illustrate: '当前分数',
        defaultValue: '0',
        type: 'number',
        version: '1.0'
    },
    {
        key: '4',
        name: 'disabled',
        illustrate: '是否只读',
        defaultValue: 'false',
        type: 'boolean',
        version: '1.0'
    },
    {
        key: '5',
        name: 'icon',
        illustrate: '自定义 Icon',
        defaultValue: '-',
        type: 'React.Fc',
        version: '1.0'

    },
    {
        key: '6',
        name: 'onChange',
        illustrate: '评分变化时候',
        defaultValue: '-',
        type: '(selectedRating: number) => void',
        version: '1.0'

    }

];


export default {
    data,
    deft,
    showClose,
    disabled,
    color,
    diyIcon
}
