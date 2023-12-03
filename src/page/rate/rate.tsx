import React from 'react';
import {Button,Rate} from '@/ayongUI/index.ts';
import ConditionalRender from "@/components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "@/components/oms-syntax-high-light/oms-syntax-high-light.tsx";

const Ratepage: React.FC = () => {


    return (<>

        <fieldset>
            <legend>基本使用</legend>
            <Rate/>
            {/*<ConditionalRender show={false}>*/}
            {/*    <OmsSyntaxHighlight/>*/}
            {/*</ConditionalRender>*/}
        </fieldset>

    </>)

}
export default Ratepage;
