export const actions = Object.freeze({
    SEND_MESSAGE: 'SEND_MESSAGE',
    CHANGE_NEW_MESSAGE_TEMPLATE_TEXT: 'CHANGE_NEW_MESSAGE_TEMPLATE_TEXT'
});

const defaultState = {
    dialogs: [
        {
            id: 1,
            userName: 'Anakin Skywalker',
            userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l0Iq-GecvCFzfHtm1t9oqOIMLkSQzK81Ew&usqp=CAU',
            messages: [
                {
                    id: 0,
                    text: 'Hello',
                    your: true,
                },
                {
                    id: 1,
                    text: 'Hello!',
                    your: false,
                },
            ],
            template: {
                text: ''
            }
        },
        {
            id: 2,
            userName: 'Obi-Wan Kenobi',
            userImg: 'https://images.hellomagazine.com/horizon/square/991a4758f0ae-star-wars-ep-3-t.jpg',
            messages: [
                {
                    id: 0,
                    text: 'Hello there',
                    your: false
                }
            ],
            template: {
                text: ''
            }
        },
        {
            id: 4,
            userName: 'General Grievous',
            userImg: 'https://pm1.aminoapps.com/5820/03c3bb7f7be9a36f82f61d0d6952a0a2ef674ee8_00.jpg',
            messages: [
                {
                    id: 0,
                    text: 'General! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, lobortis eget laoreet fermentum, fermentum a magna. Proin orci elit, accumsan a posuere in, aliquam consectetur nisl. Phasellus malesuada elit eget metus pharetra gravida. Praesent sit amet elementum odio. Morbi vestibulum elit metus, quis bibendum nisl dictum a.',
                    your: false
                },
            ],
            template: {
                text: ''
            }
        },
    ],
}

const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.CHANGE_NEW_MESSAGE_TEMPLATE_TEXT: {
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog.id !== action.id) return dialog;
                    return {
                        ...dialog,
                        template: {
                            ...dialog.template,
                            text: action.text
                        }
                    }
                }),
            }
        }
        case actions.SEND_MESSAGE: {
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog.id !== action.id) return dialog;
                    const trimmedMessage = dialog.template.text.trim();
                    if (trimmedMessage === '') return dialog;
                    return {
                        ...dialog,
                        messages: [...dialog.messages, {
                            id: nextItemId(dialog.messages),
                            text: trimmedMessage,
                            your: true
                        }],
                        template: {
                            ...dialog.template,
                            text: ''
                        }
                    }
                })
            };
        }
        default: {
            return state;
        }
    }
}

function nextItemId(items) {
    const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
}

export const sendMessageActionCreator = (id) => ({
    type: actions.SEND_MESSAGE,
    id: id
})
export const changeNewMessageTemplateTextActionCreator = (id, text) => ({
    type: actions.CHANGE_NEW_MESSAGE_TEMPLATE_TEXT,
    id: id,
    text: text,
})

export default dialogsReducer;
