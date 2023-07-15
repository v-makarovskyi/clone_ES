import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Articles from "./pages/Articles";
import SinglePublication from "./pages/SinglePublication";
import HomePage from "./pages/HomePage";
import News from './pages/News'
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "eurosolidarity/category/articles",
        element: <Articles />,
      },
      {
        path: "/eurosolidarity/category/:segment/:id",
        element: <SinglePublication />,
      },
      {
        path: "/eurosolidarity/category/news",
        element: <News />,
      },
      {
        path: "/eurosolidarity/contacts",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
