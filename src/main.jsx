import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          primary: [
            "#CDD6E2",
            "#B0C1D7",
            "#92ADD1",
            "#729AD1",
            "#4E88D8",
            "#2577E7",
            "#0067F3",
            "#1660C5",
            "#2359A1",
            "#2B5286",
            "#2F4B70",
            "#30445F",
            "#303E51",
          ],
        },
        fontSizes: {
          "2xl": 23,
          "3xl": 30,
          xxl: 60,
        },
        primaryColor: "primary",
      }}
    >
      <App/>
    </MantineProvider>
  </React.StrictMode>
);
