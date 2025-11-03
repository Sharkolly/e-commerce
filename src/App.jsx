import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Product from "./Product";
import Layout from "./Components/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<Product />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
