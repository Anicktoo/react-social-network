import s from "./Users.module.css";
import {classNameFunction} from "../../tools/classNameCompiler";
import UserItem from "./Usertem/UserItem";

const cName = classNameFunction(s);

const Users = (props) => {

    const MAX_USERS_ON_PAGE = 11;

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

    const curPage = props.currentPage;
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let {startInd, endInd} = getStartEndIndexes(MAX_USERS_ON_PAGE, curPage, pagesCount);

    const startGap = startInd !== 1;
    const endGap = endInd !== pagesCount;

    if (startGap) startInd += 2;
    if (endGap) endInd -= 2;

    const pages = [];
    for (let i = startInd; i <= endInd; i++) {
        pages.push(i);
    }

    return (<main className={s.friends}>
        <div className={cName(['friendsContainer', 'stdBlock'])}>
            <header className={s.header}>
                <span>All Users</span>
                <div className={cName(['page-container'])}>
                    {startGap ? <>
                        <div className={cName(['page-item'])}
                             onClick={() => {
                                 props.pageChange(1)
                             }}
                        >
                            1
                        </div>
                        <div className={cName(['page-item', 'blocked'])}>...</div>
                    </> : ''}
                    {pages.map(el => {
                        const isCurrent = curPage === el ? 'current-page' : '';
                        return (<div className={cName(['page-item', isCurrent])}
                                     onClick={() => {
                                         props.pageChange(el)
                                     }}
                        >
                            {el}
                        </div>);
                    })}
                    {endGap ? <>
                        <div className={cName(['page-item', 'blocked'])}>...</div>
                        <div className={cName(['page-item'])}
                             onClick={() => {
                                 props.pageChange(pagesCount)
                             }}
                        >
                            {pagesCount}
                        </div>
                    </> : ''}
                </div>
            </header>
            <div className={s.usersList}>
                {props.users.map(el => <UserItem key={el.id}
                                                 {...el}
                                                 isFetching={props.isFetching}
                                                 addFriend={props.addFriend}
                                                 follow={props.follow}
                                                 unfollow={props.unfollow}
                    />
                )}
            </div>
        </div>
    </main>);
};

export default Users;
