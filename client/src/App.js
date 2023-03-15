import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import "./App.scss"


const Layout = () =>{
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/product/:id",
      element: <Product />
    },
    {
      path:"/products/:id",
      element: <Products />
    }
  ]
}])


function App() {
  return (
    <div className="">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
