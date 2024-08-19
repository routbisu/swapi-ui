import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./themes/default";
import { Layout } from "./screens/Layout.tsx";
import "./global.css";
import { PeopleList } from "./screens/PeopleList.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      <PeopleList />
    </Layout>
  </ThemeProvider>
);
