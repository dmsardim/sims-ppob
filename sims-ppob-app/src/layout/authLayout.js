import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
const AuthLayout = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/';
    }
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
