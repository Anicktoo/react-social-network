import deepcopy from "deepcopy";

const friendsReducer = (state, action) => {
    const stateCopy = deepcopy(state);

    return stateCopy;
}

export default friendsReducer;
