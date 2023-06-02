import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../app/pages/home/Home";
import NotFound from "../app/pages/not-found/NotFound";
import Welcome from "../app/pages/welcome/Welcome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
