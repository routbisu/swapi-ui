import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./themes/default";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import { PeopleList } from "./pages/PeopleList.tsx";
import { PersonDetails } from "./pages/PersonDetails.tsx";
import "./global.css";

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
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </ThemeProvider>
);
