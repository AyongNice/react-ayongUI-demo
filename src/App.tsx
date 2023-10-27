import React, {lazy, Suspense, useState} from 'react'
import './App.css'
import {Routes, Route, Navigate, useNavigate, BrowserRouter} from 'react-router-dom';

import MenuList from "./page/menu-list/menu-list.tsx";


import Button from "./page/button/button.tsx"

function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<MenuList/>}>
                    <Route path="/button" element={<Button/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
