import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './components/controller/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './components/home/ErrorPage';
import Home from './components/home/Home';
import Trips from './components/home/trips/Trips';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/tt",
        element: <Home />,
      },
      {
        path: "/tt/trips",
        element: <Trips />,
      },
    ],
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
