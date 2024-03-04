import {connect} from 'react-redux';
import Message from './Message';

const mapStateToProps = (state, props) => {
    const messageInfo = props.messages.find(el => el.id === props.id);
    const yourInfo = state.profileData.accountInfo;
    return {
        id: messageInfo.id,
        userImg: messageInfo.your ? yourInfo.photos.small : props.userImg,
        userName: messageInfo.your ? yourInfo.fullName : props.userName,
        message: messageInfo.text
    };
}

const MessageContainer = connect(mapStateToProps)(Message);

export default MessageContainer;

