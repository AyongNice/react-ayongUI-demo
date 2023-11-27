import {Button, Message} from '@/ayongUI/index.ts';

import TitleCom from '../../components/title-com/title-com.tsx';

import {useEffect, useState} from "react";

import './index.less';

const MessagePage = () => {

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
            message: 'This is a info message', showClose: true,
            onClose: () => {
                console.log('关闭了')
            }
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

            </fieldset>

            <fieldset>
                <legend>显示关闭按钮</legend>
                <Button className='button-mes' onClick={onMessage}>info-消息</Button>
            </fieldset>
        </>

    );
}
export default MessagePage;
