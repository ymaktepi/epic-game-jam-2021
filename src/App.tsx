import React, {useState} from 'react';
import './App.css';
import {ConversationManager} from "./components/ConversationManager";

function App() {
    const [notificationCount, setNotifCount] = useState(1);
    return (
        <div className="App">
            <div className="ConversationHeader">
                <img src={"./courgettes.png"} alt="Logo" height={"80%"}
                     style={{marginLeft: "2em", borderColor: "white", borderWidth: "3px"}}/>
                <span style={{marginLeft: "2em", fontSize: "30px"}}>The Courgettes Club</span>
                <div className="NotifCount">{notificationCount}</div>
            </div>
            <ConversationManager setNotifCount={setNotifCount}/>
        </div>
    );
}

export default App;
