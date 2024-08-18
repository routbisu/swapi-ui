import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./themes/default";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import { CharactersList } from "./pages/CharactersList.tsx";
import { CharacterDetails } from "./pages/CharacterDetails.tsx";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CharactersList />,
  },
  {
    path: "/character/:characterId",
    element: <CharacterDetails />,
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
