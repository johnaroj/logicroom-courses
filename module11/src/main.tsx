import "reflect-metadata";
import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { InjectionProvider } from "./Core/Providers/Injection";
import { ValidationProvider } from "./Core/Providers/Validation";
import { App } from "./App";
import { container } from "./AppIOC";
import { configure } from "mobx";

configure({
  enforceActions: "never",
  computedRequiresReaction: false,
  reactionRequiresObservable: false,
  observableRequiresReaction: false,
  disableErrorBoundaries: false,
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InjectionProvider container={container}>
      <ValidationProvider>
        <App />
      </ValidationProvider>
    </InjectionProvider>
    ,
  </React.StrictMode>
);
