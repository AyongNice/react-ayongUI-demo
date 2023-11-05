import React from "react";
import { StepBackwardOutlined } from "@ant-design/icons";
import "./index.less";
import { Alipay, Alert, PreviousStep } from "../../ayongUI/index.ts";

const Icon = () => {
  return (
    <div>
      <h1>Icon</h1>
      <Alipay className="icon" style={{ color: "#ff8e4a" }} />
      <Alert />
      <PreviousStep />
    </div>
  );
};
export default Icon;
=======
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
>>>>>>> 6585deb5337c9ad692ee907fd4d6212364d994b0
