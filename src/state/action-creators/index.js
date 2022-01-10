export const depositMoney = (amount) => {
    return (dispatch) => {  // ye dispatch function ko parameter me lekar usse call karke return kar dega 
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}