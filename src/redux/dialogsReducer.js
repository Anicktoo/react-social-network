const SEND_MESSAGE = 'social_network/dialogs/SEND_MESSAGE';

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
        },
    ],
};

const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog.id !== action.id) return dialog;
                    return {
                        ...dialog,
                        messages: [...dialog.messages, {
                            id: nextItemId(dialog.messages),
                            text: action.text,
                            your: true
                        }],
                    }
                })
            };
        }
        default: {
            return state;
        }
    }
};

function nextItemId(items) {
    const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
}

export const saveMessage = (id, text) => ({
    type: SEND_MESSAGE,
    id,
    text,
});

export const sendMessage = (id, newMessageBody) => (dispatch) => {
    const trimmedMessage = newMessageBody.trim();
    if (trimmedMessage === '')
        return;
    dispatch(saveMessage(id, trimmedMessage));
};

export default dialogsReducer;
