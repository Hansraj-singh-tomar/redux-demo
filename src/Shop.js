// and reducer ko kam karvane ke liye hame chahiye action creater mtlb reducer ko invoke karega action creater or ye action creater dispatch karega action ko
// usedispatch hook hi action ko dispatch karne ke kam aata hai 

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';  // ye hame action creator folder ki inde.js file de rha hai  ,isme hamare sare ke sare action creator jo ham yha use karne vale hai vo hai 
const Shop = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    // const actions = bindActionCreators(actionCreators, dispatch);  // mere action kya hai vo mujhe actions ki place par likhana hai mtlb ham object destructuring ka use karenge jo ham next line me kar rhe hai 
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);


    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            {/* <button className="btn btn-primary mx-2" onClick={dispatch(actionCreators.withdrawMoney(100))}>-</button>  // jab bhi argument ho to arrow function ke andar function ko call karna hai  */}

            {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}

            {/* bindActionCreators ka use karne par  */}
            {/* <button className="btn btn-primary mx-2" onClick={() => { actions.withdrawMoney(100) }}>-</button> */}
            <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>  {/* object destructuring ka use kiya hai hamne yha par */}
            Update Balance {balance}
            {/* <button className="btn btn-primary mx-2" onClick={() => { actions.depositMoney(100) }}>+</button> */}
            <button className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>   {/* object destructuring ka use kiya hai hamne yha par */}
        </div>
    )
}

export default Shop


// <button className="btn btn-primary mx-2" onClick={dispatch(actionCreators.withdrawMoney(100))}>-</button>
// upar vale button me jo dispatch function hai ussse me direct use nhi kar sakta kyonki argument hai usme to ham arrow function ka use karenge
// <button className="btn btn-primary mx-2" onClick={() => dispatch(actionCreators.withdrawMoney(100))}>-</button>