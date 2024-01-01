import {connect} from 'react-redux';
import Friends from './Friends';

const mapStateToProps = (state, props) => {
    return {
        friends: state.friendsData.friends
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;