import deepcopy from "deepcopy";

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
                    text: 'Hello',
                    your: true,
                },
                {
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
                    text: 'Hello there',
                    your: false
                }
            ],
            template: {
                text: ''
            }
        },
        {
            id: 3,
            userName: 'General Grievous',
            userImg: 'https://pm1.aminoapps.com/5820/03c3bb7f7be9a36f82f61d0d6952a0a2ef674ee8_00.jpg',
            messages: [
                {
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

const dialogsReducer = (dialogsData = defaultState, action) => {
    const dialogsDataCopy = deepcopy(dialogsData);

    switch (action.type) {
        case actions.CHANGE_NEW_MESSAGE_TEMPLATE_TEXT: {
            const dialogObj = findDialogById(dialogsDataCopy.dialogs, action.id);
            dialogObj.template.text = action.text;
            return dialogsDataCopy;
        }
        case actions.SEND_MESSAGE: {
            const dialogObj = findDialogById(dialogsDataCopy.dialogs, action.id);
            const trimmedMessage = dialogObj.template.text.trim();
            if (trimmedMessage === '') {
                return dialogsDataCopy;
            }
            dialogObj.messages.push({
                text: trimmedMessage,
                your: true
            });
            dialogObj.template.text = '';
            return dialogsDataCopy;
        }
        default: {
            return dialogsDataCopy;
        }
    }
}

const findDialogById = (dialogs, id) => {
    const dialogObj = dialogs.find((el) => el.id === id);
    if (!dialogObj) {
        throw Error('Invalid dialog ID: ' + id);
    }
    return dialogObj;
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
