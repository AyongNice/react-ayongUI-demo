import React, {lazy, Suspense, useState} from 'react'
import './App.css'
import {Routes, Route, Navigate, useNavigate, BrowserRouter, Outlet} from 'react-router-dom';

import MenuList from "./page/menu-list/menu-list.tsx";

import Button from "./page/button/button.tsx";
import Table from "./page/table/table.tsx";

function App() {


    return (
        <>
            <Routes>
                {/*重定向*/}
                <Route path="/" element={<Navigate to="/menu/button"/>}></Route>

                <Route path="/menu" element={<MenuList/>}>
                    <Route path="/menu/button" element={<Button/>}/>
                    <Route path="/menu/table" element={<Table/>}/>
                </Route>

            </Routes>
        </>
    )
}

export default App
