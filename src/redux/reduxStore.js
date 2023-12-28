import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        dialogsData: dialogsReducer,
        profileData: profilesReducer,
        friendsData: friendsReducer,
    }
});

export default store;