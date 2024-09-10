import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DashboardHomeRoute from "./routes/dashboard/home/page";
import DashboardLayout from "./routes/dashboard/layout";
import ErrorPage from "./routes/error";
import RootLayout from "./routes/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "",
            element: <DashboardHomeRoute />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
