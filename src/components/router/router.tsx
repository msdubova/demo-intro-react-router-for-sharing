import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main_layouts";
import Home from "../home/home";
import Products from "../products/products";
import About from "../about/about";
import Help from "../help/help";
import NotFound from "../not_found/not_found";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="Help" element={<Help />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
export default Router;
