interface Sender {
    name: string
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

export const DEFAULT_ACTION: DialogAction = {quantity: 1, type: "NEXT"};

const ANGRY_PIRATE: Sender = {
    name: "Piratefaché"
}

const YMAKTEPI: Sender = {
    name: "Ymaktepi"
}

const generateDefaultTextOption = (texts: string[]) => {
    return texts.map(text => ({text}));
}

export const DIALOGS: DialogContent[] = [
    {
        messages: [{
            sender: ANGRY_PIRATE,
            text: "Hello on s'fait l'epic game jam cette année?",
            time: "Two weeks before EGJ"
        }, {sender: YMAKTEPI, text: "Ouais chuicho mais j'suis pas là tout le temps", time: "Two weeks before EGJ"}],
        options: [...generateDefaultTextOption(["Yay!", "Ebic!", "Bien sûr que oui didiou!"]), {
            text: "Noty",
            action: {type: "MOVE", quantity: 2}
        }]
    },
    {
        messages: [{
            sender: ANGRY_PIRATE,
            text: "En plus il parait que le thème principal ca parle de noeud-papillon!",
            time: "Two weeks before EGJ"
        }],
        options: generateDefaultTextOption(["👔", "🦋"])
    },
    {
        messages: [{
            sender: ANGRY_PIRATE,
            text: "Wow c'était vraiment bien cette jam vivement l'année prochaine",
            time: "Two hours after the deadline"
        }],
        options: [{text: "Ouais clair", action: {type: "WON"}}]
    },
    {messages: [{sender: ANGRY_PIRATE, text: "Cya nerd", time: "Two hours after the deadline"}], options: []},
]