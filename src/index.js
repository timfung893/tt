import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App';
import store from './components/controller/store';
import ErrorPage from './components/home/ErrorPage';
import Home from './components/home/Home';
import Trips from './components/home/trips/Trips';
import TheStart from './components/home/theStart/TheStart';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         path: "/tt",
//         element: <Home />,
//       },
//       {
//         path: "/tt/trips",
//         element: <Trips />,
//       },
//       {
//         path: "/tt/thestart",
//         element: <TheStart />,
//       },
//     ],
//   }
// ]);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/trips',
        element: <Trips />,
      },
      {
        path: "/thestart",
        element: <TheStart />,
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
