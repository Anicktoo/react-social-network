export const actions = Object.freeze({
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    SET_USERS: 'SET_USERS',
});

const defaultState = {
    users: [],
    // users: [
    //     {
    //         id: 1,
    //         userName: 'Anakin Skywalker',
    //         userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l0Iq-GecvCFzfHtm1t9oqOIMLkSQzK81Ew&usqp=CAU',
    //         status: 'Don\'t underestimate my power',
    //         isFriend: true,
    //     },
    //     {
    //         id: 2,
    //         userName: 'Obi-Wan Kenobi',
    //         userImg: 'https://images.hellomagazine.com/horizon/square/991a4758f0ae-star-wars-ep-3-t.jpg',
    //         status: 'May the force be with you!',
    //         isFriend: true,
    //     },
    //     {
    //         id: 3,
    //         userName: 'Padme Amidala',
    //         userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Amidala.png/220px-Amidala.png',
    //         status: 'Senator from Naboo',
    //         isFriend: true,
    //     },
    //     {
    //         id: 4,
    //         userName: 'General Grievous',
    //         userImg: 'https://pm1.aminoapps.com/5820/03c3bb7f7be9a36f82f61d0d6952a0a2ef674ee8_00.jpg',
    //         status: 'General of Confederacy of Independent Systems and Jedi hunter!',
    //         isFriend: true,
    //     },
    //     {
    //         id: 5,
    //         userName: 'Luke Skywalker',
    //         userImg: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Luke-Skywalker.Star-Wars-Series.webp',
    //         status: 'I AM A JEDI, like my father before me',
    //         isFriend: false,
    //     },
    //     {
    //         id: 6,
    //         userName: 'Yoda',
    //         userImg: 'https://www.looper.com/img/gallery/yodas-story-explained/intro-1675881384.jpg',
    //         status: 'Listening to music sometimes, a window opens and happy you are.',
    //         isFriend: false,
    //     },
    // ],
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id !== action.id) return user;
                    return {
                        ...user,
                        followed: true,
                    }
                })
            }
        case actions.REMOVE_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id !== action.id) return user;
                    return {
                        ...user,
                        followed: false,
                    }
                })
            }
        case actions.SET_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users.filter(el => el.photos.small !== null),
                ],
            }
        default:
            return state;
    }
}

export const addFriendAC = (id) => ({type: actions.ADD_FRIEND, id: id});
export const removeFriendAC = (id) => ({type: actions.REMOVE_FRIEND, id: id});
export const setUsersAC = (users) => ({type: actions.SET_USERS, users: users});

export default usersReducer;