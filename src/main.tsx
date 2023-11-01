// @ts-ignore
import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.less'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MenuList from "./page/menu-list/menu-list.tsx";
import Button from "./page/button/button.tsx";
import Table from "./page/table/table.tsx";

const root: ReactDOM.Root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);



