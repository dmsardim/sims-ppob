import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, AuthLayout } from '../layout';
import { ServicesScreen, TopupScreen, AccountScreen, TransactionScreen, RegisterScreen, LoginScreen, HomeScreen, PaymentScreen } from '../screens';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'register',
        element: <RegisterScreen />,
      },
      {
        path: 'login',
        element: <LoginScreen />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomeScreen />,
        children: [
          {
            path: '',
            element: <ServicesScreen />,
          },
          {
            path: 'top-up',
            element: <TopupScreen />,
          },
          {
            path: 'transaction',
            element: <TransactionScreen />,
          },
          {
            path: 'services/:id',
            element: <PaymentScreen />,
          },
        ],
      },
      {
        path: 'account',
        element: <AccountScreen />,
      },
    ],
  },
]);

export default router;
