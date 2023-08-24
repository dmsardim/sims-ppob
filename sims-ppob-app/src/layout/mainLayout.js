import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token || token === 'undefined' || token === '') {
      window.location.href = '/auth/login';
    }
  }, [token]);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
