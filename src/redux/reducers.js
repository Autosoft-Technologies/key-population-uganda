import { combineReducers } from 'redux';

import { SYNCH_BLOG } from "./actions" //Import the actions types constant we defined in our actions

let dataState = { data: [] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case SYNCH_BLOG:
            return {...state, data: action.data};
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;