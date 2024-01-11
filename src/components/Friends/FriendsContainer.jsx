import {connect} from 'react-redux';
import Friends from './Friends';
import {setUsersAC} from "../../redux/usersReducer";

const mapStateToProps = (state, props) => {
    return {
        friends: state.friendsData.friends,
        users: state.usersData.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => (dispatch(setUsersAC(users))),
    };
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;