import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "jotai";
import { QueryClientProvider } from "@tanstack/react-query";
import { NotificationsProvider } from "reapop";
import reportWebVitals from "./reportWebVitals";
import { queryClient } from "queryclient";
import { Notification } from "components/notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <NotificationsProvider>
      <Notification />
      <Provider>
        <App />
      </Provider>
    </NotificationsProvider>
  </QueryClientProvider>
);

reportWebVitals();
