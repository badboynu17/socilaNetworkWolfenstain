import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import UsersContainer from "./components/Users/UsersContainer";

let dialogs = () => <dialogs/>
let messages = () => <messages/>

const App = (props) => {/* const мы присваивоем переменной
 App (функиця* возвращает разметку jsx(использование html сразу в JS )
  стрелочную функцию => */


    return ( // снизу корневой узел div


            <div className=/*это грид*/'app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' //следит за url
                               element={<Profile />}/>

                        <Route path="/dialogs"
                               element={<DialogsContainer />}/>
                        {/*<Route path='dialogs/*' element={<Dialogs/>}/>*/}
                        <Route path="/users"
                               element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>

        )
}


export default App;
