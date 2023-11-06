import "./index.less";
import { Alipay, Alert, PreviousStep } from "../../ayongUI/index.ts";

import Tab from "./components/tab.tsx";

const Icon = () => {
  let tabData = [
    {
      title: "线框风格",
      content: (
        <div>
          <Alipay className="icon" style={{ color: "#ff8e4a" }} />
          <Alert />
          <PreviousStep />
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
      <Tab defaultActiveTab={0} tabs={tabData} />
    </div>
  );
};
export default Icon;
