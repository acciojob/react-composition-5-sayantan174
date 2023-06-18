import React, { useState } from 'react'

const Tabs = (props)=>{
    const [tab,setTab]=useState('Tab 1');
    const [ta,setTa]=useState('Tab A');
    const setTabs = (id)=>{
        setTab(`Tab ${id}`);
    }
    const setTas = (id)=>{
        setTa(`Tab ${id}`);
    }
    return (
        <>
            <ul>
                <li onClick={()=>{
                    setTabs(1);
                }}>Tab 1</li>
                <li onClick={()=>{
                    setTabs(2);
                }}>Tab 2</li>
                <li onClick={()=>{
                    setTabs(3);
                }}>Tab 3</li>
            </ul>
            <p>Content for {tab}.</p>
            <ul>
                <li onClick={()=>{
                    setTas("A");
                }}>Tab A</li>
                <li onClick={()=>{
                    setTas("B");
                }}>Tab B</li>
                <li onClick={()=>{
                    setTas("C");
                }}>Tab C</li>
            </ul>
            <p>Content for {ta}.</p>
        </>
    )
}

export default Tabs;