import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    setFetchingState,
    setTotalUsersCount,
    setUsers
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setFetchingState(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setFetchingState(false);
            });
    }

    pageChange(pageNumber) {
        this.props.setFetchingState(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetchingState(false);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            users={this.props.users}
            pageChange={this.pageChange.bind(this)}
            isFetching={this.props.isFetching}
            follow={this.props.follow}
            unfollow={this.props.unfollow} />
    };
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    };
}

export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetchingState,
    follow,
    unfollow,
})(UsersContainer);