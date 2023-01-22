import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import Start from "./Components/Start/Start";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/Quiz/" element={<Start />} />
      <Route path="/Quiz/game" element={<App />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
