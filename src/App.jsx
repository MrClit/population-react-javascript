import './App.css'
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/Root.jsx";
import RegionPage from "./pages/Region.jsx";
import {queryClient} from "./utils/http.js";
import {QueryClientProvider} from "@tanstack/react-query";
import ErrorPage from "./pages/Error.jsx";

function App() {

    // Enrutado de la aplicación
    const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          loader: () => redirect("/region/global"),
        },
        {
          path: '/region/:region',
          element: <RegionPage/>
        }
      ]
    },
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App
