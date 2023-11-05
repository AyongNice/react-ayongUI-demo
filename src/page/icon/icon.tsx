import React from 'react';
import {StepBackwardOutlined} from '@ant-design/icons';
import './index.less'
import {Alipay, Alert} from "../../ayongUI/index.ts";

const Icon = () => {
    return (
        <div>
            <h1>Icon</h1>
            <Alipay className='icon' style={{color: '#ff8e4a'}}/>
            <Alert/>

        </div>
    )
}
export default Icon