import React from "react";
import {Button} from "../../ayongUI/index.ts";

// import {Button} from 'antd'
import './index.less'

const ButtonPage = () => {

    return (
        <div>
            <h1>button</h1>
            <Button type="primary" color='#fff' size='large'>PrimaryButton</Button>
        </div>
    )
}
export default ButtonPage