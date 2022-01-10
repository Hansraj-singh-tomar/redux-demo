// ek se jyada reducer ho sakte hai jaise bacche ko khana khilane vala ka alag reducer and bachhe ko nehlane vale ka alag reducer ho sakta hai
//  yha amountReducer amount ke sath khilvad karega

// import reducers from ".";

const reducer = (state = 0, action) => {
    if (action.type === 'deposit') {
        return state + action.payload
    }
    else if (action.type === 'withdraw') {
        return state - action.payload
    }
    else {
        return state;
    }
}

export default reducer

// ab ham action creator or reducer se ek store bnayenge 