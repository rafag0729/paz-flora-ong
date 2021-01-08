import React from 'react'
import { Header } from './components/Header';
import { Main } from './components/Main';
import { SideBar } from './components/SideBar';
import { Footer } from './components/Footer';

import './styles/PazFloraApp.css';


export const PazFloraApp = () => {
    return (
        <>
            <Header/>
            <Main/>
            <SideBar/>
            <Footer/>
        </>
    )
}
