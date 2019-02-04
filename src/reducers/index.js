import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux';


//localization reducers
const initialLocalState = {
    local: null,
}

const setLocalReducer = (state = initialLocalState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCAL:            
            return {
                local: action.payload
                }              
        default:
            return state;
    }
}

// const initialLocalJsonState = {
//     localJson: null,
// }

// const putJsonToStorReducer = (state = initialLocalJsonState, action) => {
//     switch (action.type) {
//         case actionTypes.ADD_LOCAL_JSON_TO_STOR:
//             return action.payload;    
//         default:
//             return state;
//     }
// }

//redirect reducer
const initialRedirectState = {
    redirect: false
}

const redirectReducer = (state = initialRedirectState, action) => {
    switch (action.type) {
        case actionTypes.REDIRECT:            
            return {
                redirect: true
            }  
        default:
            return state;
    }
}

const rootReducer = combineReducers({   
    local: setLocalReducer,
    // localJson: putJsonToStorReducer,
    redirect: redirectReducer,
});

export default rootReducer;