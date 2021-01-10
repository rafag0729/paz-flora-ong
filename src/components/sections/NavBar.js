import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";    

export const NavBar = () => {
    return (
        <nav>
            <div className='Nav_menu'>
                <Link to="/Proyectos" >PROYECTOS</Link> 
                <Link to="/QuienesSomos" >QUIENES SOMOS</Link> 
                <Link to="/ComoAyudar" >CÓMO NOS PUEDES AYUDAR</Link> 
                <div className='dropdown'>
                        <ul className='Quienes_somos'>
                            <li>Cómo nacimos?</li>
                            <li>Proposito con la comunidad</li>
                            <li>Equipo de trabajo</li>
                        </ul>
                        <ul className='Como_ayudar'>
                            <li><p>Voluntariado</p>
                                <ul>
                                    <li>Presencial</li>
                                    <li>A distancia</li>
                                    <li>Virutal</li>
                                </ul>
                            </li>
                            <li><p>Donacionaes</p>
                                <ul>
                                    <li>Dinero***</li>
                                    <li>Insumos</li>
                                    <li>Pago de mano de obra</li>
                                </ul>
                            </li>    
                            <li><p>Crowdfounding</p></li>
                            <li><p>Investigación</p></li>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

