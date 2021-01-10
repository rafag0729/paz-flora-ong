import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,    
    Redirect
  } from "react-router-dom";
  
  import { Proyectos } from '../components/Proyectos';
  import { QuienesSomos } from '../components/QuienesSomos';
  import { ComoAyudar } from '../components/ComoAyudar';

import { Header } from '../components/sections/Header';
import { Main } from '../components/sections/Main';
import { Footer } from '../components/sections/Footer';

export const AppRouter = () => {
    return (
        <Router>
            <div className="content-wrapp">
                <Header />

                <Switch>
                    <Route exact path="/Proyectos" component={ Proyectos } />
                    <Route exact path="/QuienesSomos" component={ QuienesSomos } />
                    <Route exact path="/ComoAyudar" component={ ComoAyudar } />
                    <Route path="/" component={ Main } />

                    <Redirect to="/" />
                </Switch>

                <Footer />
            </div>            
        </Router>
    )
}
