import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
export const routers = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
]);
