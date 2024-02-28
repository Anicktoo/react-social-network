import {connect} from 'react-redux';
import UserItem from './UserItem';
import {addFriend, removeFriend} from "../../../redux/usersReducer";

const mapStateToProps = (state, props) => {
    return {
        ...props.userInfo
    };
}

const UserItemContainer = connect(mapStateToProps, {
    addFriend,
    removeFriend,
})(UserItem);

export default UserItemContainer;
