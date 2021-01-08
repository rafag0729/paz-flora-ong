import React from 'react'
import { NavBar } from './NavBar'

import './../styles/components/Header.css';

export const Header = () => {
    return (
        <header className='content-wrapp'>
            <p>I am the header</p>
            <NavBar/>
        </header>
    )
}
