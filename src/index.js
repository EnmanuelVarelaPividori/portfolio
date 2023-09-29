import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './templates/HomePage';
import ProjectsPage from './templates/ProjectsPage'
import ContactPage from './templates/ContactPage'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "projects",
    element: <ProjectsPage/>,
  },
  {
    path: "contact",
    element: <ContactPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
