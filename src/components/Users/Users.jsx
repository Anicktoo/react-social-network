import { classNameFunction } from "../../utils/classNameCompiler";
import Paginator from '../common/Paginator/Paginator';
import s from "./Users.module.css";
import UserItem from "./Usertem/UserItem";

const cName = classNameFunction(s);

const Users = ({ onPageChange, currentPage, totalUsersCount, pageSize, users, isFetching, follow, unfollow }) => {
    return (<main className={s.users}>
        <div className={cName(['usersContainer', 'stdBlock'])}>
            <header className={s.header}>
                <span>All Users</span>
                <Paginator onPageChange={onPageChange} currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} />
            </header>
            <div className={s.usersList}>
                {users.map(el => <UserItem key={el.id}
                    {...el}
                    isFetching={isFetching}
                    follow={follow}
                    unfollow={unfollow}
                />
                )}
            </div>
        </div>
    </main>);
};

export default Users;
