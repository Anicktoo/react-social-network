import {connect} from 'react-redux';
import FriendItem from './FriendItem';

const mapStateToProps = (state, props) => {

    const friendInfo = state.friendsData.friends.find(el => el.id === props.id);

    return {
        ...friendInfo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const FriendItemContainer = connect(mapStateToProps, mapDispatchToProps)(FriendItem);

export default FriendItemContainer;
