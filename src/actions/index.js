import * as actionTypes from './types';

//localization actions
// export const setLocal = (payload) => {
//     return {
//         type: actionTypes.SET_LOCAL,
//         payload: payload
//     }
// }

// export const putLocalJsonToStore = (payload) => {
//     return {
//         type: actionTypes.ADD_LOCAL_JSON_TO_STOR,
//         payload: payload
//     }
// }

// redirect actions
export const redirect = () => {
    return {
        type: actionTypes.REDIRECT,
    }
}
