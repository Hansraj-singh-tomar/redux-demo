import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './state/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// meri overall application ko iss redux store ki access mil jaye
// iske liye me import karne vala hu provider ko and store ko  
// provider react redux se aayega 


// state ko alter karne ke liye hame chahiye reducer 
// and reducer ko kam karvane ke liye hame chahiye action creater mtlb reducer ko invoke karega action creater or ye action creater dispatch karega action ko    
// usedispatch hook hi action ko dispatch karne ke kam aata hai 