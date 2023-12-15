import React, {useState, useReducer, useEffect, useContext, useCallback, useRef} from 'react';
import './App.less';
import {Routes, Route, Navigate} from 'react-router-dom';

import MenuList from './page/menu-list/menu-list.tsx';

import ButtonPage from './page/button/button.tsx';
import Table from './page/table/table.tsx';
import Icon from './page/icon/icon.tsx';
import SwitchPage from './page/switch/switch.tsx';
import RadioPage from './page/radio/radio.tsx';
import InputPage from './page/input/input.tsx';
import TooltipPage from './page/tooltip/tooltip.tsx';
import Message from './page/message/message.tsx';
import Rate from './page/rate/rate.tsx';
import {Button} from './ayongUI/index.ts';

import {useGlobalState} from './data-store/index.ts';
import {calculateComplementaryColor, setThemeColor} from "./utils/index.ts";
import {ModeAttribute} from "@/app";


function App() {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const color: ModeAttribute = JSON.parse(window.localStorage.getItem('color') || '{}')
        setThemeColor(window.localStorage.getItem('theme') || 'night', color);
        setShow(true)
    }, [])

    const toggleTheme = (): void => {
        const theme = window.localStorage.getItem('theme') === 'night' ? 'light' : 'night';
        setThemeColor(theme);
        window.localStorage.setItem('theme', theme);
    }
    const onColor = (e) => {
        const color = {
            color: calculateComplementaryColor(e.target.value),
            background: e.target.value,
        }
        setThemeColor('diy', color);
        window.localStorage.setItem('theme', 'diy');
        window.localStorage.setItem('color', JSON.stringify(color));
    }
    return (
        <>
            {
                show ?
                    <div className={`theme margins`}>
                        <input onChange={onColor} type='color'/>
                        <Button type='primary' onClick={toggleTheme}>
                            切换-主题
                        </Button>
                        <Routes>
                            {/*重定向*/}
                            <Route path='/' element={<Navigate to='/menu/button'/>}></Route>
                            <Route path='/menu' element={<MenuList/>}>
                                <Route path='/menu/button' element={<ButtonPage/>}/>
                                <Route path='/menu/table' element={<Table/>}/>
                                <Route path='/menu/icon' element={<Icon/>}/>
                                <Route path='/menu/switch' element={<SwitchPage/>}/>
                                <Route path='/menu/radio' element={<RadioPage/>}/>
                                <Route path='/menu/input' element={<InputPage/>}/>
                                <Route path='/menu/tooltip' element={<TooltipPage/>}/>
                                <Route path='/menu/message' element={<Message/>}/>
                                <Route path='/menu/rate' element={<Rate/>}/>

                            </Route>
                        </Routes>
                    </div>
                    : ''}
        </>


    )

}

export default App;
