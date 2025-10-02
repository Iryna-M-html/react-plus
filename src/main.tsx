import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./components/App/App";
// import { StrictMode } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// createRoot(document.getElementById("root") as HTMLDivElement).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//   </StrictMode>
// );
