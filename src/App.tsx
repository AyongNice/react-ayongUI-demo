import React, {useState, useReducer, useEffect, useContext} from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom';

import MenuList from "./page/menu-list/menu-list.tsx";

import ButtonPage from "./page/button/button.tsx";
import Table from "./page/table/table.tsx";
import Icon from "./page/icon/icon.tsx";
import SwitchPage from "./page/switch/switch.tsx";

import {Button} from './ayongUI/index.ts'

import globle from "./config/index.ts";

const {THEME} = globle;

import {initState, context, countReducer} from './reducer/index'

import {useGlobalState, useTheme} from './data-store/index.ts'

function App() {
    let store = useReducer(countReducer, initState)
    const [count, setCount] = useGlobalState('count');
    let [state, dispatch] = useState(context)
    const [theme, setTheme] = useTheme<string>(localStorage.getItem("theme"));

    const toggleTheme = (): void => {
        setCount(+new Date())
        if (theme === THEME[0]) {
            setTheme(THEME[1])
            window.dispatchEvent(new CustomEvent("theme", {detail: {theme: THEME[1]}}))
            localStorage.setItem("theme", THEME[1])
        } else {
            setTheme(THEME[0])
            window.dispatchEvent(new CustomEvent("theme", {detail: {theme: THEME[0]}}))
            localStorage.setItem("theme", THEME[0])
        }
    };
    useEffect(() => {
        console.log('store', store)
        setInterval(() => {
            dispatch(10)
        }, 1000)
    }, [])

    return (
        <div className={theme}>
            <context.Provider value={{store}}>
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
            </context.Provider>
        </div>
    )
}

export default App
