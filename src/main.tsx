import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./themes/default";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import "./global.css";
import { PeopleList } from "./pages/PeopleList.tsx";
import { PersonDetails } from "./pages/PersonDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PeopleList />,
  },
  {
    path: "/people/:peopleId",
    element: <PersonDetails />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  </StrictMode>
);
