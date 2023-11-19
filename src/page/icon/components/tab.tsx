import React, {useState} from "react";
import "./tab.less";
import {useGlobalState} from "../../../data-store/index.ts";

const Tab = (props) => {
    const [activeTab, setActiveTab] = useState(props.defaultActiveTab);
    const [theme, setTheme] = useGlobalState('theme');

    return (
        <div className="tab">
            <ul className="tab-header">
                <div className="tab-t">
                    {props.tabs.map((tab, index) => (
                        <div
                            // style={}
                            key={index}
                            className={`tab-item ${theme} ${activeTab === index ? "active" : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.title}
                        </div>
                    ))}
                </div>

                <div className="search">搜索</div>
            </ul>
            <div className="tab-content">{props.tabs[activeTab].content}</div>
        </div>
    );
};

export default Tab;
