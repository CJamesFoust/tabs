import React, { useState } from "react";
import styles from './Tabs.module.css';

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState({
        activeTabId: 1,
        content: "This is content for Tab 1"
    });

    const tabs = props.tabs;

    const makeActive = (tabId, content) => {
        var id = tabId;
        setActiveTab({activeTabId: id,
            content: content});
    }

    return (
        <div className={styles.tabs} >
            <span>
                {
                    tabs.map( tab => {
                        return <li key={`${tab.id}`} className={activeTab.activeTabId == `${tab.id}` ? `${styles.active}` : `${styles.notActive}`} onClick={ (e) => makeActive(`${tab.id}`,`${tab.content}`) }>{ tab.label }</li> })}
            </span>
            <div className={styles.content}>{activeTab.content}</div>
        </div>
    )

}

export default Tabs;