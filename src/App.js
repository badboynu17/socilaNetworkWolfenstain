import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route,} from "react-router-dom";

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
                               element={<Profile profilePage={props.state.profilePage}
                                                 dispatch = {props.dispatch}
                               />}/>

                        <Route path="/dialogs"
                               element={<Dialogs state={props.state.dialogsPage}
                                                state={props.state.dialogsPage}/>}/>
                        {/*<Route path='dialogs/*' element={<Dialogs/>}/>*/}
                    </Routes>
                </div>
            </div>

        )
}


export default App;
