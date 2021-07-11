import React, {useState} from 'react';
import {Message} from "../dialogs";

interface DialogBoxProps {
    message: Message;
    alignLeft: boolean;
}

export const DialogBox = (props: DialogBoxProps) => {
    const {message, alignLeft} = props;
    const alignment = {alignSelf: alignLeft ? "flex-start" : "flex-end"};
    return (<div className="Message" style={alignment}>
        <div className={"MessageText"}>
            {message.text}
        </div>
        {message.time &&
        (<div className={"MessageDate"}>
            {message.time}
        </div>)
        }
    </div>);
}
