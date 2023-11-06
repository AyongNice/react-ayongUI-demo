import "./index.less";
import { Alipay, Alert, PreviousStep } from "../../ayongUI/index.ts";

import Tab from "./components/tab.tsx";

const Icon = () => {
  let tabData = [
    {
      title: "样式一",
      content: (
        <div>
          <Alipay className="icon" style={{ color: "#ff8e4a" }} />
          <Alert />
          <PreviousStep />
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
