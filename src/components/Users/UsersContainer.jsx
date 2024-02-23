import {connect} from 'react-redux';
import Users from './Users';
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../redux/usersReducer";

const mapStateToProps = (state, props) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => (dispatch(setUsersAC(users))),
        setCurrentPage: (currentPage) => (dispatch(setCurrentPageAC(currentPage))),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;