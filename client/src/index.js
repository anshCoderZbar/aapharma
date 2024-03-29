import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "queryClient";
import { Provider } from "jotai";
import { NotificationContainer } from "app/components/Ui/NotificationContainer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <PayPalScriptProvider>
      <QueryClientProvider client={queryClient}>
        <NotificationContainer />
        <Provider>
          <App />
        </Provider>
      </QueryClientProvider>
    </PayPalScriptProvider>
  </>
);

reportWebVitals();
