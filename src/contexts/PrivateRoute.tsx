import React from 'react';
import {
  Navigate,
  Outlet
} from "react-router-dom";

import CookieService from '../services/CookieService';

export const PrivateRoute: React.FC = () => {
  const logged = CookieService.get('token');

  if(!logged) {
    return <Navigate to="/auth" />
  }
  return <Outlet />
}
