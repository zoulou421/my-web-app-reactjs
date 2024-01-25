import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router} from "react-router-dom";
import ListUser from "./components/user/ListUser";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import DeleteUser from "./components/user/DeleteUser";


const routing=(
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/user/liste" component={ListUser}/>
            <Route path="/user/add" component={AddUser}/>
            <Route path="/user/get/:id" component={EditUser}/>
            <Route path="/user/delete/:id" component={DeleteUser}/>
        </div>
    </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App element={routing}/>
    </React.StrictMode>
)
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
