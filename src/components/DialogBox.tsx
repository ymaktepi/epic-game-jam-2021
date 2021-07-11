import React from 'react';
import {Message} from "../types";

interface DialogBoxProps {
    message: Message;
    isSelf: boolean;
}

export const DialogBox = (props: DialogBoxProps) => {
    const {message, isSelf} = props;
    const alignSender = {alignSelf: isSelf ? "flex-end" : "flex-start"};
    const styleText = { backgroundColor: isSelf ? "#097058" : "white", color: isSelf ? "white" : "black"};
    return (<div className="Message" style={alignSender}>
        {!isSelf &&
        (<div className={"MessageSender"} style={{color: message.sender.color}}>
            {message.sender.name}:
        </div>)
        }
        <div className={"MessageText"} style={styleText}>
            {message.text}
        </div>
        {message.time &&
        (<div className={"MessageDate"}>
            {message.time}
        </div>)
        }
    </div>);
}
