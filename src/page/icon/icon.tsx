import "./index.less";
import {Alipay, Alert, PreviousStep} from "@/ayongUI/index.ts";

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
    ];
    console.log(iconCmps)
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
                                {React.createElement(item.cmp, {
                                    className: 'icon-item',
                                    onClick: () => iconClick(item.name)
                                })}
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
