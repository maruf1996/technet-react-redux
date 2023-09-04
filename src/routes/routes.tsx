import App from '@/App';
import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignUpForm';
import Checkout from '@/pages/Checkout';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import ProductDetails from '@/pages/ProductDetails';
import Products from '@/pages/Products';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './privateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/signup',
    element: <SignupForm></SignupForm>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
