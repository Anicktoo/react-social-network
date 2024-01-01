import {connect} from 'react-redux';
import Message from './Message';

const mapStateToProps = (state, props) => {
    const messageInfo = props.messages.find(el => el.id === props.id);
    const yourInfo = state.profileData.accountInfo;
    return {
        id: messageInfo.id,
        userImg: messageInfo.your ? yourInfo.avatarImgSrc : props.userImg,
        userName: messageInfo.your ? yourInfo.name : props.userName,
        message: messageInfo.text
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;

