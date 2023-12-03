import "./index.less";
import {
    Alipay, Alert, PreviousStep, FileCopy, CodeDisplay, LabelersLists, UserHollow,
    EyesOpen, EyesClosed, Setting, Collapse, Unfold, Alipayfull, Advance, Wechatfull,
    Fileput, Download, Upload, Wechat, Weibofull, Weibo, Fulcopy, Taobao, Taobaoful, Android,
    Androidfu, Google, Googlefu, Plusround, Plusrofu, Minusround, Minusrfu, Upward, Upwardfu,
    Downward, Downwardfu, Downwleft, Downwleftfu, Downwright, Downwrightfu, Arrotopfu,
    Arrowbuttomfu, Arroleft, Arroright, Shrinks, Dilate, Rewind, Forward, Doubleright,
    Doubleleft, Aligntop, Alignbottom, Aligncenter, Enter, Rollback, Retweet, Swap,
    Swapleft, Swapright, Tick, Wrong, Lament, Illustrate, Delete, Search, Transfer,
    Unlock, Save, Message, Play, Panetop, Panedown, Paneleft, Paneright, Login, Logout,
    Menufold, Menuunfold
} from "@/ayongUI/index.ts";
import Tab from "./components/tab.tsx";
import React from "react";
import {copyText} from "@/utils/index.ts";
const Icon = () => {
    const iconCmps = [
        {
            cmp: Alipay,
            name: "Alipay",
        },
        {
            cmp: Alert,
            name: "Alert",
        },
        {
            cmp: PreviousStep,
            name: "PreviousStep",
        },
        {
            cmp: Advance,
            name: "Advance",
        },
        {
            cmp: FileCopy,
            name: "FileCopy",
        },
        {
            cmp: CodeDisplay,
            name: "CodeDisplay",
        },
        {
            cmp: LabelersLists,
            name: "LabelersLists",
        },
        {
            cmp: Collapse,
            name: "Collapse",
        },
        {
            cmp: Unfold,
            name: "Unfold",
        },
        {
            cmp: UserHollow,
            name: "UserHollow",
        },
        {
            cmp: EyesOpen,
            name: "EyesOpen",
        },
        {
            cmp: EyesClosed,
            name: "EyesClosed",
        },
        {
            cmp: Setting,
            name: "Setting",
        },
        {
            cmp: Fileput,
            name: "Fileput",
        },
        {
            cmp: Download,
            name: "Download",
        },
        {
            cmp: Upload,
            name: "Upload",
        },
        {
            cmp: Wechat,
            name: "Wechat",
        },
        {
            cmp: Weibo,
            name: "Weibo",
        },
        {
            cmp: Taobao,
            name: "Taobao",
        },
        {
            cmp: Android,
            name: "Android",
        },
        {
            cmp: Google,
            name: "Google",
        },
        {
            cmp: Plusround,
            name: "Plusround",
        },
        {
            cmp: Minusround,
            name: "Minusround",
        },
        {
            cmp: Upward,
            name: "Upward",
        },
        {
            cmp: Downward,
            name: "Downward",
        },
        {
            cmp: Downwleft,
            name: "Downwleft",
        },
        {
            cmp: Downwright,
            name: "Downwright",
        },
        {
            cmp: Shrinks,
            name: "Shrinks",
        },
        {
            cmp: Dilate,
            name: "Dilate",
        },
        {
            cmp: Doubleright,
            name: "Doubleright",
        },
        {
            cmp: Doubleleft,
            name: "Doubleleft",
        },
        {
            cmp: Aligntop,
            name: "Aligntop",
        },
        {
            cmp: Alignbottom,
            name: "Alignbottom",
        },
        {
            cmp: Aligncenter,
            name: "Aligncenter",
        },
        {
            cmp: Enter,
            name: "Enter",
        },
        {
            cmp: Rollback,
            name: "Rollback",
        },
        {
            cmp: Retweet,
            name: "Retweet",
        },
        {
            cmp: Swap,
            name: "Swap",
        },
        {
            cmp: Swapleft,
            name: "Swapleft",
        },
        {
            cmp: Swapright,
            name: "Swapright",
        },
        {
            cmp: Delete,
            name: "Delete",
        },
        {
            cmp: Search,
            name: "Search",
        },
        {
            cmp: Transfer,
            name: "Transfer",
        },
        {
            cmp: Unlock,
            name: "Unlock",
        },
        {
            cmp: Save,
            name: "Save",
        },
        {
            cmp: Play,
            name: "Play",
        },
        {
            cmp: Panetop,
            name: "Panetop",
        },
        {
            cmp: Panedown,
            name: "Panedown",
        },
        {
            cmp: Paneleft,
            name: "Paneleft",
        },
        {
            cmp: Paneright,
            name: "Paneright",
        },
        {
            cmp: Login,
            name: "Login",
        },
        {
            cmp: Logout,
            name: "Logout",
        },
        {
            cmp: Menufold,
            name: "Menufold",
        },
        {
            cmp: Menuunfold,
            name: "Menuunfold",
        },
    ];
    const solidicon = [
        {
            cmp: Alipayfull,
            name: "Alipayfull",
        },
        {
            cmp: Wechatfull,
            name: "Wechatfull",
        },
        {
            cmp: Weibofull,
            name: "Weibofull",
        },
        {
            cmp: Fulcopy,
            name: "Fulcopy",
        },
        {
            cmp: Taobaoful,
            name: "Taobaoful",
        },
        {
            cmp: Androidfu,
            name: "Androidfu",
        },
        {
            cmp: Googlefu,
            name: "Googlefu",
        },
        {
            cmp: Plusrofu,
            name: "Plusrofu",
        },
        {
            cmp: Minusrfu,
            name: "Minusrfu",
        },
        {
            cmp: Upwardfu,
            name: "Upwardfu",
        },
        {
            cmp: Downwardfu,
            name: "Downwardfu",
        },
        {
            cmp: Downwleftfu,
            name: "Downwleftfu",
        },
        {
            cmp: Downwrightfu,
            name: "Downwrightfu",
        },
        {
            cmp: Arrotopfu,
            name: "Arrotopfu",
        },
        {
            cmp: Arrowbuttomfu,
            name: "Arrowbuttomfu",
        },
        {
            cmp: Arroleft,
            name: "Arroleft",
        },
        {
            cmp: Arroright,
            name: "Arroright",
        },
        {
            cmp: Rewind,
            name: "Rewind",
        },
        {
            cmp: Forward,
            name: "Forward",
        },
        {
            cmp: Tick,
            name: "Tick",
        },
        {
            cmp: Wrong,
            name: "Wrong",
        },
        {
            cmp: Lament,
            name: "Lament",
        },
        {
            cmp: Illustrate,
            name: "Illustrate",
        },
    ]
    const iconClick = (name: string) => {
        copyText(`<${name}/>`);
        Message.success({message: "复制成功", duration: 1});
    };
    let tabData = [
        {
            title: "线框风格",
            content: (
                <div className="icons">
                    {iconCmps.map((item, index) => {
                        return (
                            <div className="icon-border" key={index}>
                                <div className="icon-item" onClick={() => iconClick(item.name)}>
                                    {React.createElement(item.cmp)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ),
        },
        {
            title: "实底风格",
            content: <div className='solidicon'>
                {solidicon.map((item, index) => {
                    return (
                        <div className="solidicon-border" key={index}>
                            <div className="solidicon-item" onClick={() => iconClick(item.name)}>
                                {React.createElement(item.cmp)}
                            </div>
                        </div>
                    );
                })}
            </div>,
        }
    ];
    return (
        <div>
            <h1>Icon</h1>
            <Tab defaultActiveTab={0} tabs={tabData}/>
        </div>
    );
};
export default Icon;
