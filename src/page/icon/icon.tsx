import "./index.less";
import { Alipay, Alert, PreviousStep } from "@/ayongUI/index.ts";

import Tab from "./components/tab.tsx";
import React from "react";

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

  const iconClick = (name: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = `<${name}/>`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  let tabData = [
    {
      title: "样式一",
      content: (
        <div>
          {iconCmps.map((item, index) => {
            return (
              <div
                className="icon-item"
                key={index}
                onClick={() => iconClick(item.name)}
              >
                {React.createElement(item.cmp)}
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: "样式二",
      content: <div>111</div>,
    },
    {
      title: "样式三",
      content: <div>111</div>,
    },
  ];
  return (
    <div>
      <h1>Icon</h1>
      <Tab defaultActiveTab={0} tabs={tabData} />
    </div>
  );
};
export default Icon;
