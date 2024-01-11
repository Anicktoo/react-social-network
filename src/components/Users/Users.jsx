import React from 'react';
import s from './Users.module.css';
import {classNameFunction} from "../../tools/classNameCompiler";
import UserItemContainer from "./Usertem/UserItemContainer";
import axios from "axios";

const cName = classNameFunction(s);


const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))

    }
    const allUsersList = props.users.map(el => <UserItemContainer key={el.id} id={el.id}/>);

    return (
        <main className={s.friends}>
            <div className={cName(['friendsContainer', 'stdBlock'])}>
                <header className={s.header}>
                    <span>All Users</span>
                </header>
                <div className={s.usersList}>
                    {allUsersList}
                </div>
            </div>
        </main>
    );
};

export default Users;
