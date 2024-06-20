import React from "react";

export default function Tabz({tabContent, onChange}){
    return (
        <div className="wrapper">
            <div className="heading">
                {tabContent.map((tabItem) => (
                    <div key={tabItem.label}>
                        <span className="label">{tabItem.label}</span>
                    </div>
                ))}
            </div>
            <div className="content">

            </div>
        </div>
    );
}; 