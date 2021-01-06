import React from 'react'
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { SideBar } from './components/SideBar';
import { Footer } from './components/Footer';


export const PazFloraApp = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <Main/>
            <SideBar/>
            <Footer/>
        </>
    )
}
