import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Introduce from "./Introduce";
import NotFound from "./NotFound";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
  {
    element: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/introduce",
        element: <Introduce />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Pages = () => {
  return <RouterProvider router={router} />;
};

export default Pages;
