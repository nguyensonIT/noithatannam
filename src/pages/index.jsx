import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Introduce from "./Introduce";
import NotFound from "./NotFound";
import RootLayout from "../layout/RootLayout";
import Contact from "./Contact";

const routes = [
  {
    element: <RootLayout />,
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
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const Pages = () => {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  );
};

export default Pages;
