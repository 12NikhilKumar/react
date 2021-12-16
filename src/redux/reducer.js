import {INCREMENT_COUNTER} from './action';
export const reducer = (state, action) =>{
    switch(action.type){
        case INCREMENT_COUNTER: {
            return {
                ...state,
                count: state.count + action.payload
            };
        }
        default: {
            return state;
        }
    }
};