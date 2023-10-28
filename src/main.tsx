// @ts-ignore
import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";

const root: ReactDOM.Root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);



