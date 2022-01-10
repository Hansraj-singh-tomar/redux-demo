import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    // const state = useSelector(state => state.state);  // yha par sari state ko use kar sakte hai but hame amount hi chahiye to ham niche vali line likhenge 
    const amount = useSelector(state => state.amount);    // useSelector hook hai hamara, isse ham jo state use karna chahte hai usse ham use kar sakte hai 
    // ye amount hamara reducers ke index.js file se aa rha hai 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">State Bank Of Hansraj</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                        <div>
                            <button disabled='true' className="btn-primary">Your Balance is {amount}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


// <button disable="true"> your balance is zero </button> karne par vo button click nhi hoga