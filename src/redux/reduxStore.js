import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profileReducer";
import usersReducer from "./usersReducer";


const store = configureStore({
    reducer: {
        dialogsData: dialogsReducer,
        profileData: profilesReducer,
        usersData: usersReducer,
    }
});

export default store;