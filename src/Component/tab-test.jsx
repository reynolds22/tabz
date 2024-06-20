import Tabz from "./tabz";
import React from "react";
import "./tabz.css";

export default function TabTest(){

    const tabs = [
        {
            label : "Tab 1",
            content : <div>This is tab 1 content.</div>
        },
        {
            label : "Tab 2",
            content : <div>This is tab 2 content.</div>
        },
        {
            label : "Tab 3",
            content : <div>This is tab 3 content.</div>
        }
    ];

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    };
    
    return <Tabz tabContent={tabs} onChange={handleChange} />
};