import React from 'react';
import './../styles/components/NavBar.css';

export const NavBar = () => {
    return (
        <nav>
            <div className='Nav_menu'>
                <a>PROYECTOS</a>
                <a>QUIENES SOMOS</a>
                <a>CÓMO NOS PUEDES AYUDAR</a>
                <div className='dropdown hidden'>
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
                                    <li>Dinero</li>
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

