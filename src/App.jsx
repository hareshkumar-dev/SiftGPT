// 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// 
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from "./screens/Home";
import Result from "./screens/Result";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/result/:searchText",
      element: <Result/>
    },
  ]);

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

