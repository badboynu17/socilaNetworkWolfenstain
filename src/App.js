import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


let dialogs = () => <dialogs/>
let messages = () => <messages/>


const App = (props) => {/* const мы присваивоем переменной
 App (функиця* возвращает разметку jsx(использование html сразу в JS )
  стрелочную функцию => */


    return ( // снизу корневой узел div


        <div className=/*это грид*/'app-wrapper'>
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
                    {/*<Route path='dialogs/*' element={<Dialogs/>}/>*/}
                    <Route path="/users"
                           element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    )
}


export default App;
