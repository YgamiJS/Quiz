import App from "@/App";
import { Start } from "@/Components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/Quiz/" element={<Start />} />
      <Route path="/Quiz/game" element={<App />} />
    </Route>
  )
);
