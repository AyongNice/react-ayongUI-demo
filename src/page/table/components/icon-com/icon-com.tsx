import React from "react";
import * as Icons from '@ant-design/icons';

const MyIconFont = ({type, ...restProps}) => {
    const pascalCaseType = type.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
    const IconComponent = Icons[pascalCaseType];
    return <IconComponent {...restProps} />;
};
const IconCom = ({iconKyeNameList, mode}) => {
    return (
        <div>
            {iconKyeNameList.map((icon, index) => {
                return <div
                    key={index}>{React.createElement(MyIconFont, {type: (mode[index]) || 'BackwardOutlined'})} </div>
            })}
        </div>
    )
}
export default IconCom;