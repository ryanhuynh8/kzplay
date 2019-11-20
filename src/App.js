import React from "react";
import "./App.css";
import { Button, Pane, Tablist, SidebarTab, Paragraph, Tab } from "evergreen-ui";

const paneParentStyle = {
    height: "100%",
    width: "100%",
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    display: "flex"
};

const sideBarStyle = {
    flexGrow: 2,
    maxWidth: "200px",
    backgroundColor: "white"
};

const projectListStyle = {
    flexGrow: 3
    // backgroundColor: "blue"
};

const mainStyle = {
    flexGrow: 8
    // backgroundColor: "black"
};

const state = {
    selectedIndex: 0,
    tabs: ["Traits", "Event History", "Identities"]
};

function App() {
    return (
        <div className="App">
            <Pane {...paneParentStyle}>
                <Pane {...sideBarStyle}>
                    <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                        {state.tabs.map((tab, index) => (
                            <SidebarTab
                                key={tab}
                                id={tab}
                                isSelected={index === state.selectedIndex}
                                aria-controls={`panel-${tab}`}
                            >
                                {tab}
                            </SidebarTab>
                        ))}
                    </Tablist>
                </Pane>
                <Pane {...projectListStyle}></Pane>
                <Pane {...mainStyle}>
                    <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                        {state.tabs.map((tab, index) => (
                            <Tab
                                key={tab}
                                id={tab}
                                isSelected={index === state.selectedIndex}
                                aria-controls={`panel-${tab}`}
                            >
                                {tab}
                            </Tab>
                        ))}
                    </Tablist>
                    <Pane padding={16} background="tint1" flex="1">
                        {state.tabs.map((tab, index) => (
                            <Pane
                                key={tab}
                                id={`panel-${tab}`}
                                role="tabpanel"
                                aria-labelledby={tab}
                                aria-hidden={index !== state.selectedIndex}
                                display={
                                    index === state.selectedIndex
                                        ? "block"
                                        : "none"
                                }
                            >
                                <Paragraph>Panel {tab}</Paragraph>
                            </Pane>
                        ))}
                    </Pane>
                </Pane>
            </Pane>
        </div>
    );
}

export default App;
