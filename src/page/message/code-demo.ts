import {useDebounce} from "../../ayongUI/utils";
import {Table} from "../../ayongUI";
import React from "react";
import ConditionalRender from "@/components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "@/components/oms-syntax-high-light/oms-syntax-high-light.tsx";
import {DataItem} from "@/ayongUI/components/table/index.tsx";

const deft: string = `
import {Button, Message} from 'ayongUI';

const App = () => (
      <Button  onClick={() => Message.info({message: 'This is a info message'})}>info-消息</Button>

      <Button   type='primary' onClick={() => Message.success({message: 'This is a info message'})}>success-消息</Button>

      <Button  type='warn' onClick={() => Message.warning({message: 'This is a info message'})}>warning-消息</Button>

      <Button type='error'onClick={() => Message.error({message: 'This is a info message'})}>error-消息</Button>
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

const useHTML: string = `
import {Button, Message} from 'ayongUI';

const App = () => {
    const onUseHTML = () => {
        Message.info({
            message: <h2>这是一个HTML内容</h2>,
            useHTMLString: true,
        })
    }
    return (<Button className='button-mes' onClick={onUseHTML}>Use HTML String</Button>)
}

export default App;   
`
const diyTime: string = `
import {Button, Message} from 'ayongUI';

const App = () => {
    const onDuration = () => {
        Message.info({
            message: 'This is a info message', showClose: true,
            duration: '6',
        })
    }
    return (<Button className='button-mes' onClick={onUseHTML}>Use HTML String</Button>)
}
export default App; 
`
const diyIcon: string = `
import {Button, Message} from 'ayongUI';

const App = () => {
    const onDiyIcon = () => {
        Message.info({
            message: 'This is a diy Icon message',
            icon: <Setting/>,
            useHTMLString: true,
        })
    }
    return (<Button className='button-mes' onClick={onDiyIcon}>自定义icon</Button>
)
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
    useHTML,
    diyTime,
    diyIcon
}
