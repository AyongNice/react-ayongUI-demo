import React, {useState, useReducer, useEffect, useContext} from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom';

import MenuList from "./page/menu-list/menu-list.tsx";

import ButtonPage from "./page/button/button.tsx";
import Table from "./page/table/table.tsx";
import Icon from "./page/icon/icon.tsx";
import SwitchPage from "./page/switch/switch.tsx";

import {Button} from './ayongUI/index.ts'


import {initState, countReducer} from './reducer/index'

import {useGlobalState} from './data-store/index.ts'

function App() {
    const [theme, setTheme] = useGlobalState('theme');

    const toggleTheme = (): void => {
        setTheme((previe): string => {
            const res = previe === 'night' ? 'light' : 'night'
            window.localStorage.setItem("theme", res)
            return res
        })
    };

    return (
        <div className={theme}>
            <Button type='primary' onClick={toggleTheme}>切换-主题</Button>
            <Routes>
                {/*重定向*/}
                <Route path="/" element={<Navigate to="/menu/button"/>}></Route>
                <Route path="/menu" element={<MenuList/>}>
                    <Route path="/menu/button" element={<ButtonPage/>}/>
                    <Route path="/menu/table" element={<Table/>}/>
                    <Route path="/menu/icon" element={<Icon/>}/>
                    <Route path="/menu/switch" element={<SwitchPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
