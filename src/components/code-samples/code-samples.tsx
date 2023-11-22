import ConditionalRender from "@/components/conditional-render/conditional-render.tsx";
import OmsSyntaxHighlight from "@/components/oms-syntax-high-light/oms-syntax-high-light.tsx";
import codeDemo from "@/page/table/code-demo.ts";
import {CodeDisplay} from "@/ayongUI";
import React, {useState} from "react";


const codeSamples = ({children}) => {

    /** 展开折叠状态对象 **/
    const map = {
        deft: false,
        jsx: false,
        sort: false,
        group: false,
        drag: false,
        unfold: false,
        diyUnfold: false,
    }
    const [codeUnfoldMap, setCodeUnfoldMap] = useState<{ [key: string]: boolean }>(map)

    const unfoldCode = (key: string) => {
        if (codeUnfoldMap[key] === undefined) return unfold;
        return !codeUnfoldMap[key]
    }
    const onUnfoldCode = (key: string) => {
        setCodeUnfoldMap((prevState) => {
            return {...prevState, [key]: !codeUnfoldMap[key]}
        })
    }
    return (
        <>
            <ConditionalRender show={unfoldCode('def')}>
                {children}
            </ConditionalRender>
            <CodeDisplay onClick={() => onUnfoldCode('def')} style={{width: '20px'}}/>
        </>
    )


}