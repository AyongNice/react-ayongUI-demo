import {useEffect, useState} from 'react';
// import {Button, Table} from "dist";
import {Button, Table} from '@/ayongUI/index.ts';

import './index.less';
import OmsSyntaxHighlight from '../../components/oms-syntax-high-light/oms-syntax-high-light.tsx';
import TitleCom from '../../components/title-com/title-com.tsx';
import codeDemo from './code-demo.ts';
import ConditionalRender from '../../components/conditional-render/conditional-render.tsx';
import global from '@/config/index.ts';
import {useGlobalState} from '../../data-store/index.ts';

const ButtonPage = () => {
    const [unfold, setUnfold] = useState<boolean>(true);
    const [theme, setTheme] = useGlobalState('theme');

    const onClick = (): void => {
    };

    /** 展开/折叠示例 **/
    const onUnfold = (): void => {
        setUnfold(!unfold);
    };
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        setCount(count + 1);
    }, [count2]);
    return (
        <div>

            <TitleCom title='button' onUnfold={onUnfold}/>
            <fieldset>
                <legend>type 类型 设置</legend>
                <Button className='button'>默认类型</Button>
                <Button className='button' type='dashed'>dashed-虚线按钮</Button>
                <Button className='button' type='primary'>primary-主题按钮</Button>
                <Button className='button' type='dangerous'>dangerous-危险按钮</Button>
                <Button className='button' type='warn'>warn-警告按钮</Button>
                <Button className='button' type='safe'>safe-安全按钮</Button>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.typeSetingcodeConut}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>shape 形状 设置</legend>
                <Button>默认-按钮</Button>
                <Button shape='strong'>直角-按钮</Button>
                <Button shape='round'>round-椭圆钮</Button>
                <Button type='primary' href='https://github.com/AyongNice/ayongUI'>
                    href-跳转按钮
                </Button>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.shapeSetingcodeConut}/>
                </ConditionalRender>
            </fieldset>
            <fieldset>
                <legend>自定义 className 样式</legend>
                <Button type='primary' onClick={onClick} className='diy'>
                    small-ayongUI
                </Button>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.classNameSetingcodeConut}/>
                </ConditionalRender>
            </fieldset>

            <fieldset>
                <legend>设置防抖 1000毫秒</legend>
                <Button type='primary' onClick={onClick} time={1000}>
                    small-ayongUI
                </Button>

                <ConditionalRender show={unfold}>
                    <OmsSyntaxHighlight textContent={codeDemo.debounceSetingcodeConut}/>
                </ConditionalRender>
            </fieldset>

            <h2>Porps 介绍</h2>
            <Table
                className={`table-theme-${theme}`}
                columns={global.columns}
                data={codeDemo.data}
            />
        </div>
    );
};
export default ButtonPage;
