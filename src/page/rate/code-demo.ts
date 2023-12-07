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
        name: 'message',
        illustrate: '消息提示内容',
        defaultValue: '-',
        type: 'string | number | ReactNode',
        version: '1.0'
    },
    {
        key: '2',
        name: 'showClose',
        illustrate: '是否显示关闭按钮',
        defaultValue: 'false',
        type: 'boolean',
        version: '1.0'
    },
    {
        key: '3',
        name: 'useHTMLString',
        illustrate: '是否将 message 属性作为 HTML 片段处理',
        defaultValue: 'false',
        type: 'string',
        version: '1.0'
    },
    {
        key: '4',
        name: 'onClose',
        illustrate: '关闭回调,只有在showClose为true时才有效',
        defaultValue: '() => void',
        type: ' () => void',
        version: '1.0'
    },
    {
        key: '5',
        name: 'icon',
        illustrate: '自定义 Icon',
        defaultValue: '-',
        type: 'React.Fc',
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
