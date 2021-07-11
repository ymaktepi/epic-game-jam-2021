export interface Sender {
    name: string,
    color: string,
}

export interface Message {
    sender: Sender;
    text: string;
    time?: string;
}

export interface DialogContent {
    messages: Message[];
    options: DialogOption[];
}

export interface DialogOption {
    text: string;
    action?: DialogAction;
}

export type ActionType = "NEXT" | "MOVE" | "LOST" | "WON";

export interface DialogAction {
    type: ActionType;
    quantity?: number;
}
