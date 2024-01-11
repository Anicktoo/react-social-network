import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";


const store = configureStore({
    reducer: {
        dialogsData: dialogsReducer,
        profileData: profilesReducer,
        friendsData: friendsReducer,
        usersData: usersReducer,
    }
});

export default store;