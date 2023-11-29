import {Button, Message, Table, Setting} from '@/ayongUI/index.ts';

import TitleCom from '../../components/title-com/title-com.tsx';
import React, {useEffect, useState} from "react";
import './index.less';
import ConditionalRender from '../../components/conditional-render/conditional-render.tsx';
import OmsSyntaxHighlight from '../../components/oms-syntax-high-light/oms-syntax-high-light.tsx';
import codeDemo from "./code-demo.ts";
import global from "../../config";
import {useGlobalState} from '../../data-store/index.ts';

const data = [
    {
        key: '1',
        name: 'Message.info',
        description: '显示普通提示消息',
        parameter: 'MessageProps见下方详情',
        type: 'void',
        default: '-'
    },
    {
        key: '2',
        name: 'Message.success',
        description: '显示成功提示消息',
        parameter: 'MessageProps见下方详情',
        type: 'void',
        default: '-'
    },
    {
        key: '3',
        name: 'Message.warning',
        description: '显示警告提示消息',
        parameter: 'MessageProps见下方详情',
        type: 'void',
        default: '-'
    },
    {
        key: '4',
        name: 'Message.error',
        description: '显示错误提示消息',
        parameter: 'MessageProps见下方详情',
        type: 'void',
        default: '-'
    },

]
const columns = [
    {
        title: '方法名',
        key: 'name',
        dataIndex: 'name',
        width: 200,
    },
    {
        title: '描述',
        key: 'description',
        dataIndex: 'description',
        width: 200,
    },
    {
        title: '参数',
        key: 'parameter',
        dataIndex: 'parameter',
        width: 200,
    },
    {
        title: '返回值',
        key: 'type',
        dataIndex: 'type',
        width: 200,
    },

]


const MessagePage = () => {
    const [theme, setTheme] = useGlobalState('theme');

    const [unfold, setUnfold] = useState<boolean>(true);
    /** 展开/折叠示例 **/
    const onUnfold = (): void => {
        setUnfold(!unfold);
    };
    useEffect(
        () => {
            setInterval(() => {
                // Message.info('This is a info message')
            }, 30)
        }, []
    )
    const onMessage = () => {
        Message.info({
            message: 'This is a info message',
            showClose: true,
            onClose: () => {
                console.log('关闭了')
            }
        })
    }
    const onDuration = () => {
        Message.info({
            message: 'This is a info message',
            duration: '6',
        })
    }
    const onUseHTML = () => {
        Message.info({
            message: <h2>这是一个HTML内容</h2>,
            useHTMLString: true,
        })
    }
    const onDiyIcon = () => {
        Message.info({
            message: 'This is a diy Icon message',
            icon: <Setting/>,
            useHTMLString: true,
        })
    }
    return (
        <>
            <TitleCom title='Message' onUnfold={onUnfold}/>
            <fieldset>
                <legend>基础用法</legend>
                <Button className='button-mes'
                        onClick={() => Message.info({message: 'This is a info message'})}>info-消息</Button>

                <Button className='button-mes' type='primary'
                        onClick={() => Message.success({message: 'This is a info message'})}>success-消息</Button>

                <Button className='button-mes' type='warn'
                        onClick={() => Message.warning({message: 'This is a info message'})}>warning-消息</Button>

                <Button type='error'
                        onClick={() => Message.error({message: 'This is a info message'})}>error-消息</Button>


                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.deft}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>显示关闭按钮</legend>
                <Button className='button-mes' onClick={onMessage}>info-消息</Button>
                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.showClose}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>使用 HTML 片段作为正文内容</legend>
                <p>message 还支持使用 HTML 字符串作为正文内容。 需要注意的是 防止XSS 攻击 必须设置useHTMLString
                    为true</p>
                <Button className='button-mes' onClick={onUseHTML}>Use HTML String</Button>
                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.useHTML}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>自定义显示时间6秒</legend>
                <Button className='button-mes' onClick={onDuration}>自定义时长</Button>
                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.diyTime}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>自定义icon</legend>
                <Button className='button-mes' onClick={onDiyIcon}>自定义icon</Button>
                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.diyIcon}/>
                </ConditionalRender>
            </fieldset>

            <h2>method 介绍</h2>

            <Table
                className={`table-theme-${theme}`}
                columns={columns}
                data={data}
            />

            <h3>MessageProps入参详情介绍</h3>
            <Table
                className={`table-theme-${theme}`}
                columns={global.columns}
                data={codeDemo.data}
            />

        </>

    );
}
export default MessagePage;
