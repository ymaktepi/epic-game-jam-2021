import React, {useState, useEffect, useRef} from 'react';
import {DEFAULT_ACTION, DIALOGS} from "../dialogs";
import {DialogBox} from "./DialogBox";
import {Options} from "./Options";
import {DialogOption} from "../types";
import {CURRENT_SENDER} from "../senders";
import { Modal} from 'antd';


interface ConversationManagerProps {
    setNotifCount: (notifCount: number) => void;
}

export const ConversationManager = (props: ConversationManagerProps) => {
    const [index, setIndex] = useState(0);
    const [shownMessages, setShownMessages] = useState(DIALOGS[index].messages);
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        // @ts-ignore
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [shownMessages]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
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
                showModal();
        }
    }

    const nbNotifs = shownMessages.filter(message => message.sender !== CURRENT_SENDER).length;
    props.setNotifCount(nbNotifs);

    return (<div className={"ConversationManager"}>
        <div className="ConvoTopHalf">
            {shownMessages.map(message => <DialogBox message={message} isSelf={message.sender === CURRENT_SENDER}/>)}
            <div ref={messagesEndRef} />
        </div>
        <Options options={DIALOGS[index].options} performAction={performAction}/>
        <Modal title="What a run!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            You got {nbNotifs} notifications, what a pro! GG 👔
        </Modal>
    </div>);
}