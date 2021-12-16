export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const incrementCounter = (amount)=>({
    type: INCREMENT_COUNTER,
    payload : amount
});