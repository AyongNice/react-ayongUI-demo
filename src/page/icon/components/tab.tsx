import React, { useState } from "react";
import "./tab.less";

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab);

  return (
    <div className="tab">
      <ul className="tab-header">
<<<<<<< HEAD
        <div className="tab-t">
=======
        <div>
>>>>>>> 5e850e8 (tabq切换图标类型)
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
>>>>>>> 5e850e8 (tabq切换图标类型)
        <div className="search">搜索</div>
      </ul>
      <div className="tab-content">{props.tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
