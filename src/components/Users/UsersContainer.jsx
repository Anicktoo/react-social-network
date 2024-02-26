import {connect} from 'react-redux';
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    pageChange(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      pageChange={this.pageChange.bind(this)}/>
    };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);