import {DialogAction, DialogContent, Message} from "./types";
import {ANGRY_PIRATE, DOUBLE, GARY, HASHED, KIKS, YMAKTEPI} from "./senders";

export const DEFAULT_ACTION: DialogAction = {quantity: 1, type: "NEXT"};


const optionDefault = (texts: string[]) => {
    return texts.map(text => ({text}));
}

const optionWithAction = (texts: string[], action: DialogAction) => {
    return texts.map(text => ({text, action}))
}

const messageWithTime = (messages: Message[], time: string) => {
    return messages.map(message => ({...message, time}));
}

const message1YearAgo = (messages: Message[]) => {
    return messageWithTime(messages, "1h après la dernière game jam");
}

const message2WeeksAgo = (messages: Message[]) => {
    return messageWithTime(messages, "2 semaines avant l'EGJ2021");
}

const message1DayBefore = (messages: Message[]) => {
    return messageWithTime(messages, "1 jour avant l'EGJ2021");
}

const message1HBefore = (messages: Message[]) => {
    return messageWithTime(messages, "1h avant l'EGJ2021");
}

const messageKickoff = (messages: Message[]) => {
    return messageWithTime(messages, "Kickoff time!");
}

const messageFridayEvening = (messages: Message[]) => {
    return messageWithTime(messages, "Vendredi soir");
}

const messageSaturday18h = (messages: Message[]) => {
    return messageWithTime(messages, "Samedi, 18h");
}

const messageSaturday20h = (messages: Message[]) => {
    return messageWithTime(messages, "Samedi, 20h");
}

const messageSaturday22h = (messages: Message[]) => {
    return messageWithTime(messages, "Samedi, 22h");
}

const messageSunday3h = (messages: Message[]) => {
    return messageWithTime(messages, "Dimanche, 3h");
}

const messageSundayNoon = (messages: Message[]) => {
    return messageWithTime(messages, "Dimanche, midi");
}

const messageSundayDeadline = (messages: Message[]) => {
    return messageWithTime(messages, "Dimanche, 13h");
}

const messageSundayTooLate = (messages: Message[]) => {
    return messageWithTime(messages, "Dimanche, trop tard");
}

const JUMP_TO_1_DAY_BEFORE = 2;

export const DIALOGS: DialogContent[] = [
    {
        messages: [...message1YearAgo([
            {
                sender: YMAKTEPI,
                text: "Bon c'était cool mais l'année prochaine on s'entraine un peu avant sur UE comme ça on passe pas pour des plots comme les deux dernieres fois."
            },
            {
                sender: HASHED, text: "Ouais pas con"
            },
            {
                sender: ANGRY_PIRATE, text: "Need"
            }
        ]),
            ...message2WeeksAgo([
                    {
                        sender: YMAKTEPI,
                        text: "coucou les gars on vient de recevoir un mail! y a l'Epic game jam PROFESSIONAL EDITION 👔 qui a lieu! 9-11 juillet (dans 2 semaines) qui est chaud?"
                    },
                    {
                        sender: DOUBLE, text: "sur place ou remote?"
                    },
                    {
                        sender: ANGRY_PIRATE, text: "j'ai peur des gens qui toussent"
                    },
                    {
                        sender: KIKS, text: "ahh cool suis surement là"
                    },
                    {
                        sender: HASHED, text: "need lesgoo 🍆"
                    }
                ]
            )
        ],
        options: [
            ...optionWithAction(["EBIC§§§", "Yay"], {type: "MOVE", quantity: JUMP_TO_1_DAY_BEFORE}),
            {text: "Non mais ca va merder comme d'hab"}
        ]
    },
    {
        messages: message2WeeksAgo([
            {sender: ANGRY_PIRATE, text: "non mais c'est bon on va s'entrainer cette fois"}
        ]),
        options: [
            ...optionDefault(["ouais c'est vrai soyons positifs", "ca va merder mais chuicho"])
        ]
    },
    {
        messages: message1DayBefore(
            [
                {
                    sender: ANGRY_PIRATE, text: "bon on fait ca ou? chinois ou chez hashed?"
                },
                {
                    sender: GARY, text: "vs ét ou lol jm pa lé gmjam mé je v1 pour lé bièr"
                },
                {
                    sender: YMAKTEPI, text: "allez viendez chez moi y a de la place"
                }
            ]
        ),
        options: optionDefault(["parfait a demain"])
    },
    {
        messages: message1HBefore([
            {sender: HASHED, text: "Qui est dispo ce soir? @piratefaché @ymaktepi @doublesentinel @player"},
            {
                sender: ANGRY_PIRATE,
                text: "Je suis pas sur, j'ai un souper et peut-être un film au NIFFF, mais demain normalement"
            },
            {sender: KIKS, text: "Nicht disponible au final ce week-end"},
            {sender: ANGRY_PIRATE, text: "RIP EGJ 2021"},
            {sender: YMAKTEPI, text: "i'm retarded, j'serai la demain"},
        ]),
        options: [
            {text: "suis là, on fait quoi?"},
            {text: "dispo demain sorry :(", action: {type: "MOVE", quantity: 5}}
        ],
    },
    {
        messages: messageKickoff([
            {
                sender: HASHED,
                text: "on prépare un brainstorming sur un document collaboratif?! Pour la tech y'avait des motivés pour UE"
            },
            {sender: YMAKTEPI, text: "@doublesentinel était chaud pour un rocket league avec des sous-marins"},
            {sender: YMAKTEPI, text: "on va de nouveau avoir rien qui marche"},
            {sender: DOUBLE, text: "des vaisseaux!"},
            {sender: YMAKTEPI, text: "same same but different"},
            {sender: DOUBLE, text: "yes"},
        ]),
        options: [
            {text: "Je suis un PRO 👔 de Unreal Engine tkt les gars", action: {type: "MOVE", quantity: 2}},
            {text: "Perso j'ai un zero pointer en Unreal Engine et en CPP"}
        ],
    },
    {
        messages: messageKickoff([
            {
                sender: DOUBLE,
                text: "t'facon on va probablement faire en blueprints (visual scripting) pasque ca suffit amblement pour du prototypage et ca évite le cpp"
            },
            {
                sender: ANGRY_PIRATE,
                text: "Faut qu'on voit comment ca marche ces blueprints, perso j'ai jamais lancé unreal"
            },
            {sender: DOUBLE, text: "drag n drop nodes, google is your friend"},
        ]),
        options: [
            {text: "EZ mon Google foo est au top niveau"},
        ],
    },
    {
        messages: messageFridayEvening([
            {
                sender: HASHED,
                text: "J'ai trouvé un bon tuto pour begginners: https://www.youtube.com/watch?v=gQmiqmxJMtA bon après il fait 5h mais c'est worth it je l'ai matté en x2"
            },
        ]),
        options: [
            {text: "pas besoin je skip le tuto", action: {type: "MOVE", quantity: 2}},
            {text: "Top ca a l'air kool"}
        ],
    },
    {
        messages: messageFridayEvening([
            {sender: YMAKTEPI, text: "on va de nouveau avoir rien qui marche huehue"},
        ]),
        options: [
            {text: "tkt j'me suis fait le tuto j'vais carry"},
        ],
    },
    {
        messages: messageSaturday18h([
            {sender: HASHED, text: "mais du coup pour le multi? split screen ou réseau?"},
            {sender: YMAKTEPI, text: "ballec je fais un chatbot en JS"}
        ]),
        options: [
            {
                text: "Jeu en réseau, on est pas la pour enfiler des perles ou bien?",
                action: {type: "MOVE", quantity: 2}
            },
            {text: "Splitscreen, gameplay > features"},
            {text: "je switch sur un projet et j'aide le chatbot", action: {type: "MOVE", quantity: 5}}
        ],
    },
    {
        messages: messageSaturday20h([
            {
                sender: DOUBLE,
                text: "réseau c'est mieux en plus avec UE on peut tout faire facilement, c'est vraiment trop bien fait!"
            },
            {
                sender: DOUBLE,
                text: "bon moi je pars sur HOUDINI pour faire les assets du niveau des astéroides et tout et tout"
            },
            {sender: DOUBLE, text: "putain faut payer HOUDINI, rip la monétisation :("},
        ]),
        options: [{text: "bon ok on tente"}],
    },
    {
        messages: messageSaturday22h([
            {sender: HASHED, text: "putin, alors pour le multi il faut pas avoir l'install depuis l'epic launcher"},
            {sender: HASHED, text: "je suis parti pour compiler UE5 depuis les sources"},
            {sender: HASHED, text: "mais pour ca il faut que j'install Visual Studio Community 2019 aussi"},
            {sender: ANGRY_PIRATE, text: "moi je regarde comment on control les joueur dans le jeu"},
        ]),
        options: [{text: "j'vous aide les gars"}],
    },
    {
        messages: messageSunday3h([
            {
                sender: HASHED,
                text: "ca faisait longtemps que j'avais pas participer a une install party, ca compile toujours et j'ai pas encore commencer a creer"
            },
            {
                sender: HASHED,
                text: "moi je vais me coucher, ca compile toujours, cette fois ci c'est les 8 milles shaders qui doivent etre compiler pour le premier launch du jeu!"
            },
        ]),
        options: [{text: "bonne nuit fréro"}],
    },
    {
        messages: messageSundayNoon([
            {sender: HASHED, text: "J'AI LE RESEAU QUI FONCTIONNE!!!"},
            {sender: HASHED, text: "on peut rien faire sur le jeu, mais ca marche en local"},
            {sender: HASHED, text: "on peut mettre deux trous d'bal et se courir apres, SUPER!"},
        ]),
        options: [{text: "gg mais bon on rend dans 3h, autant faire un chatbot en JS"}],
    },
    {
        messages: messageSundayDeadline([
            {sender: YMAKTEPI, text: "Bon, on fait un chatbot alors?!"},
        ]),
        options: [
            {text: "Yes, je commence a creer le scenario"},
            {text: "Nope, never give up", action: {type: "MOVE", quantity: 2}},
        ],
    },
    {
        messages: messageSundayTooLate([
            {sender: HASHED, text: "PRINTER"},
            {sender: YMAKTEPI, text: "NORWEGIEN INQUISITION"},
            {sender: ANGRY_PIRATE, text: "moi je roule en Opel"},
            {sender: DOUBLE, text: "c'est bien mieux qu'une Ford, le Fordisme tmtc"},
        ]),
        options: [
            {text: "GG 👔", action: {type: "WON"}},
        ],
    },
    {
        messages: messageSundayTooLate([
            {sender: HASHED, text: "bon, ben on a pas reussi a rendre, RIP!"},
            {sender: YMAKTEPI, text: "j'vous l'avais dit! mais love yourself quand meme"},
            {sender: ANGRY_PIRATE, text: "c'est quand meme plus simple sur Unity..."},
            {sender: DOUBLE, text: "mais on a une skybox au moins."},
            {sender: HASHED, text: "HOUDINI!!!"},
        ]),
        options: [
            {text: "RIP 👔", action: {type: "WON"}},
        ],
    },
    {
        messages: messageSundayTooLate([
            {sender: HASHED, text: "a l'année prochaine et cette fois on s'prépare didiou"}
        ]),
        options: []
    }
]
