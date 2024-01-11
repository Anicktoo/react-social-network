import {connect} from 'react-redux';
import Users from './Users';
import {setUsersAC} from "../../redux/usersReducer";

const mapStateToProps = (state, props) => {
    return {
        users: state.usersData.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => (dispatch(setUsersAC(users))),
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;