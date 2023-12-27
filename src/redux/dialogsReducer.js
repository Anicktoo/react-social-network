import deepcopy from "deepcopy";

export const actions = Object.freeze({
    SEND_MESSAGE: 'SEND_MESSAGE',
    CHANGE_NEW_MESSAGE_TEMPLATE_TEXT: 'CHANGE_NEW_MESSAGE_TEMPLATE_TEXT'
});

const dialogsReducer = (dialogsData, action) => {
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
