import {Button, Message} from '@/ayongUI/index.ts';
import TitleCom from '../../components/title-com/title-com.tsx';

import {useState} from "react";
import './index.less';

const MessagePage = () => {

    const [unfold, setUnfold] = useState<boolean>(true);
    /** 展开/折叠示例 **/
    const onUnfold = (): void => {
        setUnfold(!unfold);
    };

    return (
        <>
            <TitleCom title='Message' onUnfold={onUnfold}/>
            <fieldset>
                <legend>基础用法</legend>
                <Button className='button' onClick={() => Message.info('This is a info message')}>info-消息</Button>

                <Button className='button' type='primary'
                        onClick={() => Message.success('This is a success message')}>success-消息</Button>

                <Button className='button' type='warn'
                        onClick={() => Message.warning('This is a warning message')}>warning-消息</Button>

                <Button type='error' onClick={() => Message.error('This is a error message')}>error-消息</Button>

            </fieldset>
        </>

    );
}
export default MessagePage;
