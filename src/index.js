
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/build/esm/styles.css";

const app = <AppProvider i18n={en}><App /></AppProvider>;

ReactDOM.render(app, document.getElementById("root"));
