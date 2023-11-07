import React, { useState } from "react";
import "./tab.less";

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab);

  return (
    <div className="tab">
      <ul className="tab-header">
<<<<<<< HEAD
        <div>
=======
        <div className="tab-t">
>>>>>>> dev
          {props.tabs.map((tab, index) => (
            <div
              // style={}
              key={index}
              className={`tab-item ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
<<<<<<< HEAD
=======

>>>>>>> dev
        <div className="search">搜索</div>
      </ul>
      <div className="tab-content">{props.tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
