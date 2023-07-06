import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function PrivateRoute() {
  const isAuthenticated = localStorage.getItem('access_token') !== null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null;
}
