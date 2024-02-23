import React from 'react';
import s from './Users.module.css';
import {classNameFunction} from "../../tools/classNameCompiler";
import UserItemContainer from "./Usertem/UserItemContainer";
import axios from "axios";

const cName = classNameFunction(s);


// const Users = (props) => {
//
//     const getUsers = () => {
//         if (props.users.length === 0) {
//
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => props.setUsers(response.data.items))
//
//         }
//     }
//     const usersList = props.users.map(el => <UserItemContainer key={el.id} id={el.id}/>);
//
//     return (
//         <main className={s.friends}>
//             <button onClick={getUsers}>Get Users</button>
//             <div className={cName(['friendsContainer', 'stdBlock'])}>
//                 <header className={s.header}>
//                     <span>All Users</span>
//                 </header>
//                 <div className={s.usersList}>
//                     {usersList}
//                 </div>
//             </div>
//         </main>
//     );
// };
//
// export default Users;

class Users extends React.Component {
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
        const getStartEndIndexes = (maxNumbersOnPage, curPage, pagesCount) => {
            if (pagesCount <= maxNumbersOnPage) {
                return {startInd: 1, endInd: pagesCount};
            }

            const delta = Math.floor(maxNumbersOnPage / 2);
            const pagesToFirst = curPage - 1;
            const pagesToLast = pagesCount - curPage;

            if (pagesToFirst <= delta) {
                return {startInd: 1, endInd: maxNumbersOnPage};
            }
            if (pagesToLast <= delta) {
                return {startInd: pagesCount - maxNumbersOnPage, endInd: pagesCount};
            }

            return {startInd: curPage - delta, endInd: curPage + delta};
        }

        const maxNumbersOnPage = 11;
        const curPage = this.props.currentPage;
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let {startInd, endInd} = getStartEndIndexes(maxNumbersOnPage, curPage, pagesCount);

        const startGap = startInd !== 1;
        const endGap = endInd !== pagesCount;
        
        if (startGap) startInd += 2;
        if (endGap) endInd -= 2;

        const pages = [];
        for (let i = startInd; i <= endInd; i++) {
            pages.push(i);
        }
        return (
            <main className={s.friends}>
                <div className={cName(['friendsContainer', 'stdBlock'])}>
                    <header className={s.header}>
                        <span>All Users</span>
                        <div className={cName(['page-container'])}>
                            {startGap ?
                                <>
                                    <div className={cName(['page-item'])}
                                         onClick={() => {
                                             this.pageChange(1)
                                         }}
                                    >
                                        1
                                    </div>
                                    <div className={cName(['page-item', 'blocked'])}>...</div>
                                </> : ''}
                            {pages.map(el => {
                                    const isCurrent = curPage === el ? 'current-page' : '';
                                    return (
                                        <div className={cName(['page-item', isCurrent])}
                                             onClick={() => {
                                                 this.pageChange(el)
                                             }}
                                        >
                                            {el}
                                        </div>);
                                }
                            )}
                            {endGap ?
                                <>
                                    <div className={cName(['page-item', 'blocked'])}>...</div>
                                    <div className={cName(['page-item'])}
                                         onClick={() => {
                                             this.pageChange(pagesCount)
                                         }}
                                    >
                                        {pagesCount}
                                    </div>
                                </> : ''}
                        </div>
                    </header>
                    <div className={s.usersList}>
                        {this.props.users.map(el => <UserItemContainer key={el.id} userInfo={el}/>)}
                    </div>
                </div>
            </main>
        );
    };
}

export default Users;