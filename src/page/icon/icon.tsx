import "./index.less";
import {Alipay, Alert, PreviousStep, FileCopy, CodeDisplay, LabelersLists, UserHollow,
    EyesOpen,EyesClosed,Setup,Collapse,Unfold
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
            cmp: Setup,
            name: "Setup",
        },
    ];

    const iconClick = (name: string) => {
        copyText(`<${name}/>`);
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
            content: <div>111</div>,
        },
        {
            title: "双色风格",
            content: <div>111</div>,
        },
    ];
    return (
        <div>
            <h1>Icon</h1>
            <Tab defaultActiveTab={0} tabs={tabData}/>
        </div>
    );
};
export default Icon;
