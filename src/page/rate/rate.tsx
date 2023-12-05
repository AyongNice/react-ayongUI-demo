import React from 'react';
import {Button, Rate} from '@/ayongUI/index.ts';
import ConditionalRender from "@/components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "@/components/oms-syntax-high-light/oms-syntax-high-light.tsx";

const Ratepage: React.FC = () => {

    const styleRet = {
        "::after": {
            background: "red",
            // 其他样式...
        },
    }
    return (<>

        <fieldset>
            <legend>基本使用</legend>
            <Rate/>
            {/*<ConditionalRender show={false}>*/}
            {/*    <OmsSyntaxHighlight/>*/}
            {/*</ConditionalRender>*/}
        </fieldset>


        <fieldset>
            <legend>只读</legend>
            <Rate disabled value={3}/>
            {/*<ConditionalRender show={false}>*/}
            {/*    <OmsSyntaxHighlight/>*/}
            {/*</ConditionalRender>*/}
        </fieldset>


        <fieldset>
            <legend>自定义color</legend>
            <Rate color='#cbbcf7' value={3}/>
            {/*<ConditionalRender show={false}>*/}
            {/*    <OmsSyntaxHighlight/>*/}
            {/*</ConditionalRender>*/}
        </fieldset>
    </>)

}
export default Ratepage;
