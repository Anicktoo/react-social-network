import deepcopy from "deepcopy";

const defaultState = {
    friends: [
        {
            id: 1,
            userName: 'Anakin Skywalker',
            userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l0Iq-GecvCFzfHtm1t9oqOIMLkSQzK81Ew&usqp=CAU',
        },
        {
            id: 2,
            userName: 'Obi-Wan Kenobi',
            userImg: 'https://images.hellomagazine.com/horizon/square/991a4758f0ae-star-wars-ep-3-t.jpg',
        },
        {
            id: 3,
            userName: 'Padme Amidala',
            userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Amidala.png/220px-Amidala.png',
        },
        {
            id: 4,
            userName: 'General Grievous',
            userImg: 'https://pm1.aminoapps.com/5820/03c3bb7f7be9a36f82f61d0d6952a0a2ef674ee8_00.jpg',
        },
    ],
}

const friendsReducer = (state = defaultState, action) => {
    const stateCopy = deepcopy(state);

    return stateCopy;
}

export default friendsReducer;
