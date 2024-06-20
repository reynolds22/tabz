import React, {useState} from "react";

export default function Tabz({tabContent, onChange}){

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    };

    return (
        <div className="wrapper">
            <div className="heading">
                {tabContent.map((tabItem, index) => (
                    <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={()=> handleOnClick(index)} key={tabItem.label}>
                        <span className="label">{tabItem.label}</span>
                    </div>
                ))}
            </div>
            <div className="content" style={{color: "red"}}>
                {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
            </div>
        </div>
    );
}; 