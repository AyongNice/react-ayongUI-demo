import React from 'react';
import {Rate, Alert} from '@/ayongUI/index.ts';
import codeDemo from "./code-demo.ts";
import {useGlobalState} from '@/data-store/index.ts';
import TitleCom from "@/components/title-com/title-com.tsx";
import CodeDisplayCom from "@/components/code-display/code-display.tsx";
import useExpandableList from "@/components/code-display/index.ts";

const Ratepage: React.FC = () => {

    const [theme, setTheme] = useGlobalState('theme');
    const {expandedItems, handleExpandItem, handleExpandAll} = useExpandableList([1, 2, 3, 4]);

    return (<>
        <TitleCom title='Rate' onUnfold={handleExpandAll}/>
        <fieldset>
            <legend>基本使用</legend>
            <Rate/>
            <CodeDisplayCom textContent={codeDemo.deft} keyIndex={1} list={expandedItems}/>
        </fieldset>


        <fieldset>
            <legend>只读</legend>
            <Rate disabled value={3}/>
            <CodeDisplayCom textContent={codeDemo.disabled} keyIndex={2} list={expandedItems}/>

        </fieldset>


        <fieldset>
            <legend>自定义color</legend>
            <Rate color='#cbbcf7' value={3}/>
            <CodeDisplayCom textContent={codeDemo.color} keyIndex={3} list={expandedItems}/>

        </fieldset>

        <fieldset>
            <legend>自定义icon</legend>
            <Rate value={3} icon={Alert}/>
            <CodeDisplayCom textContent={codeDemo.diyIcon} keyIndex={4} list={expandedItems}/>
        </fieldset>
    </>)

}
export default Ratepage;
