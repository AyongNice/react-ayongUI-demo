import React, {lazy, Suspense, useState} from 'react'
import './App.css'
import {Routes, Route, Navigate, useNavigate, BrowserRouter} from 'react-router-dom';
import Button from "./page/button/button.tsx";
import MenuList from "./page/menu-list/menu-list.tsx";

import config from './config/index.ts'



function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<MenuList/>}/>
                <Route path="/button" element={<Button/>}/>
            </Routes>
        </>
    )
}

export default App
