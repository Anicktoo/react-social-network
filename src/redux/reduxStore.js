import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profilesReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


const store = configureStore({
    reducer: {
        dialogs: dialogsReducer,
        profile: profilesReducer,
        users: usersReducer,
        auth: authReducer,
    }
});

export default store;