import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    follow,
    getUsers,
    unfollow,
} from "../../redux/usersReducer";
import { getCurrentPageSelector, getIsFetchingSelector, getPageSizeSelector, getTotalUsersCountSelector, getUsersSelector } from '../../redux/usersSelector';
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChange(pageNumber) {
        this.props.getUsers(this.props.pageSize, pageNumber);
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            users={this.props.users}
            isFetching={this.props.isFetching}
            onPageChange={this.onPageChange.bind(this)}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    };
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
    };
}

export default compose(
    connect(
        mapStateToProps,
        {
            follow,
            unfollow,
            getUsers,
        }
    )
)(UsersContainer);