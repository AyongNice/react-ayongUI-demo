import React, {useState, ThemeContext} from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom';

import MenuList from "./page/menu-list/menu-list.tsx";

import ButtonPage from "./page/button/button.tsx";
import Table from "./page/table/table.tsx";
import Icon from "./page/icon/icon.tsx";
import {Button} from './ayongUI/index.ts'
import globle from "./config/index.ts";

const {THEME} = globle;

function App() {
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme"));
    const toggleTheme = (): void => {
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


    return (
        <div className={theme}>
            <Button type='primary' onClick={toggleTheme}>切换-主题</Button>
            <Routes>
                {/*重定向*/}
                <Route path="/" element={<Navigate to="/menu/button"/>}></Route>
                {/*<ThemeContext.Provider value={{theme, toggleTheme}}>*/}
                <Route path="/menu" element={<MenuList/>}>
                    <Route path="/menu/button" element={<ButtonPage/>}/>
                    <Route path="/menu/table" element={<Table/>}/>
                    <Route path="/menu/icon" element={<Icon/>}/>
                </Route>
                {/*</ThemeContext.Provider>*/}


            </Routes>
        </div>
    )
}

export default App
