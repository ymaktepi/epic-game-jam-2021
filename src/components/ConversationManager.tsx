import React, {useState} from 'react';
import {DEFAULT_ACTION, DialogOption, DIALOGS} from "../dialogs";
import {DialogBox} from "./DialogBox";
import {Options} from "./Options";

const CURRENT_SENDER = {name: "You"};

interface ConversationManagerProps {
    setNotifCount: (notifCount: number) => void;
}

export const ConversationManager = (props: ConversationManagerProps) => {
    const [index, setIndex] = useState(0);
    const [shownMessages, setShownMessages] = useState(DIALOGS[index].messages);

    const moveToDialog = (newIndex: number, newTextFromUser: string) => {
        setIndex(newIndex)
        setShownMessages([...shownMessages, {
            text: newTextFromUser,
            sender: CURRENT_SENDER,
        }, ...DIALOGS[newIndex].messages])
    }

    const performAction = (option: DialogOption) => {
        const {action, text} = option;
        const usedAction = action ? action : DEFAULT_ACTION;
        switch (usedAction.type) {
            case "NEXT":
                moveToDialog(index + 1, text);
                break;
            case "MOVE":
                moveToDialog(index + (usedAction.quantity || 1), text);
                break;
            case "WON":
            case "LOST":
                moveToDialog(DIALOGS.length - 1, text)
                alert("YOU " + usedAction.type + "!");
        }
    }

    const nbNotifs = shownMessages.filter(message => message.sender !== CURRENT_SENDER).length;
    props.setNotifCount(nbNotifs);

    return (<div className={"ConversationManager"}>
        <div className="ConvoTopHalf">
            {shownMessages.map(message => <DialogBox message={message} alignLeft={message.sender.name !== "You"}/>)}
        </div>
        <Options options={DIALOGS[index].options} performAction={performAction}/>
    </div>);
}