import React from 'react';
import { BrowserRouter as Router,  Routes as RoutesProvider, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Product";

import { PrivateRoute } from "./contexts/PrivateRoute";

const Routes: React.FC = () => {
  return (
    <Router>
        <RoutesProvider>
            <Route path="/" element={<Home />} />        
            <Route path="/auth" element={<Login />} />

            <Route path='/' element={<PrivateRoute/>}>
              <Route path='/products' element={<Products/>}/>
            </Route>  
            
            <Route path="*" element={<h1>Page not found</h1>} />
        </RoutesProvider>
    </Router>
  );
}

export default Routes;