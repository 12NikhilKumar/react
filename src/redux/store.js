import {createStore} from 'redux';
import {incrementCounter} from './action';
import {reducer} from './reducer';
const initState = {
    count: 1
};
export const store = createStore(reducer, initState);
store.subscribe(()=>{
    console.log(`some thing has changed`,store.getState());
});
const action = incrementCounter(1);
store.dispatch(action);