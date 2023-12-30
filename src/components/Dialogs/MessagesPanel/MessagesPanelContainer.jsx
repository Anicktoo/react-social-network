import React from "react";
import {changeNewMessageTemplateTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer";
import MessagesPanel from "./MessagesPanel";
import StoreContext from "../../../StoreContext";

const MessagesPanelContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const sendMessage = (id) => {
                        store.dispatch(sendMessageActionCreator(id));
                    }

                    const changeNewMessageTemplateText = (id, value) => {
                        store.dispatch(changeNewMessageTemplateTextActionCreator(id, value));
                    }
                    return (
                        <MessagesPanel
                            sendMessage={sendMessage}
                            changeNewMessageTemplateText={changeNewMessageTemplateText}
                            id={props.id}
                            messages={props.messages}
                            myImage={state.profileData.accountInfo.avatarImgSrc}
                            myName={state.profileData.accountInfo.name}
                            userImg={props.userImg}
                            userName={props.userName}
                            messageText={props.template.text}
                        />);
                }
            }
        </StoreContext.Consumer>

    );
}

export default MessagesPanelContainer;

