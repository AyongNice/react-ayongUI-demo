/**
 * demo 标题组件
 * 2023/11/07
 */
import {Alert} from "../../ayongUI/index.ts";

import style from './title-com.module.less';


interface TitleComProps {
    title: string;//标题
    onUnfold: () => void;//展开
}

const TitleCom = ({
                      title = 'title', onUnfold = () => {
    }
                  }) => {
    return (
        <>
            <div className={style.unfoldBox}>
                <h1>{title}</h1>
                <div className={style.toptic} onClick={onUnfold}>
                    展开/折叠代码示例
                    <Alert/>
                </div>
            </div>
        </>

    )
}

export default TitleCom;