import React from "react";
import ReactDOM from "react-dom/client";
import { container, createContainer } from "./dependencies/IOC";
import Presenter from "./presenter";
import { Container } from "inversify";

function App() {
  // 2. entry point
  const container: Container = createContainer("real"); // Fix: Assign the result of createContainer to the container variable
  const viewModel = container.get(Presenter).load();
  return <>{viewModel.message}</>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
