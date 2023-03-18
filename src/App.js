import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


let dialogs = () => <dialogs/>
let messages = () => <messages/>


const App = (props) => {


    return ( // снизу корневой узел div


        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile"
                           element={<ProfileContainer/>}/>

                    <Route path='/profile/:userId?'
                           element={<ProfileContainer/>}/>

                    <Route path="/dialogs"
                           element={<DialogsContainer/>}/>
                    
                    <Route path="/users"
                           element={<UsersContainer/>}/>

                    <Route path="/login"
                           element={<LoginPage/>}/>
                </Routes>
            </div>
        </div>

    )
}


export default App;
