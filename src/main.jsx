import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./components/App/App";
import SponsorshipApp from "./components/App/Sponsorship";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/sponsorship",
    element: <SponsorshipApp />,
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
