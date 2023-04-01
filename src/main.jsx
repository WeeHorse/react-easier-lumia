import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Shop from "./pages/Shop";
import './index.css';

export const menuPaths = [
  { path: "/", label: 'Shop', element: <Shop /> },
  { path: "/om-oss", label: 'Om oss', element: <About /> }
];

const router = createBrowserRouter([
  { path: "/", element: <App />, children: menuPaths }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);