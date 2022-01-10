import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"; // ye asynchronous function ko execute karne me help karta hai 
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk))  //  createStore ye hamare sare reducers ko leta hai uske baad initial state ko leta hai { } and then hame koi middleware ko apply karna hai to ham usse apply kar sakte hai 