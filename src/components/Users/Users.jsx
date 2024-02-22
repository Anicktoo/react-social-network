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
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=99')
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return (
            <main className={s.friends}>
                <div className={cName(['friendsContainer', 'stdBlock'])}>
                    <header className={s.header}>
                        <span>All Users</span>
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