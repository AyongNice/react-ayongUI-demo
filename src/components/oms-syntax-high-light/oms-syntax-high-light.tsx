/**
 * 代码高亮组件
 * 2023/06/03
 */
import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {
    vscDarkPlus,
    atomDark,
    oneDark,
    a11yDark,
    duotoneDark,
    duotoneSea,
    materialOceanic,
    nightOwl,
    solarizedDarkAtom,
    coldarkDark
} from 'react-syntax-highlighter/dist/esm/styles/prism';// 代码高亮主题风格
const them = {
    dark: duotoneDark,
};
import {copyText} from "../../utils/index.ts";
import {Alert} from "@/ayongUI/index.ts";
import style from './index.module.less'

interface OmsSyntax {
    darkMode: string;
    textContent: string;
    language: string;
    onClick?: () => void;
}

const OmsSyntaxHighlight = ({
                                darkMode = 'atomDark',
                                textContent = '',
                                language = 'javascript',
                            }: OmsSyntax) => {


    if (!textContent) return
    return (
        <div className={style.highlighterBox}>
            <Alert className={style.copy} onClick={() => copyText(textContent)}/>
            <SyntaxHighlighter
                showLineNumbers={true} // 是否展示左侧行数
                lineNumberStyle={{color: '#ddd', fontSize: 10}} // 左侧行数的样式
                style={them.dark}  // 主题风格
                language={language}  // 需要语言类型 如css, jsx , javascript 等
                PreTag='div'
            >
                {String(textContent).replace(/\n$/, '')}

            </SyntaxHighlighter>
        </div>

    );
};

export default OmsSyntaxHighlight;

/**
 * 代码块颜色列表枚举
 * coy
 * dark
 * funky
 * okaidia
 * solarizedlight
 * tomorrow
 * twilight
 * prism
 * a11yDark
 * atomDark
 * base16AteliersulphurpoolLight
 * cb
 * coldarkCold
 * coldarkDark
 * coyWithoutShadows
 * darcula
 * dracula
 * duotoneDark
 * duotoneEarth
 * duotoneForest
 * duotoneLight
 * duotoneSea
 * duotoneSpace
 * ghcolors
 * gruvboxDark
 * gruvboxLight
 * holiTheme
 * hopscotch
 * lucario
 * materialDark
 * materialLight
 * materialOceanic
 * nightOwl
 * nord
 * oneDark
 * oneLight
 * pojoaque
 * shadesOfPurple
 * solarizedDarkAtom
 * synthwave84
 * vs
 * vscDarkPlus
 * xonokai
 * zTouch
 */
