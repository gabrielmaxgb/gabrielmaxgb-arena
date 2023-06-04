import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviousProject from "../app/components/common/previous-project/PreviousProject";
import ScrollToTop from "../app/hooks/scroll-to-top/ScrollToTop";
import Home from "../app/pages/home/Home";
import NotFound from "../app/pages/not-found/NotFound";
import Projects from "../app/pages/projects/Projects";
import Welcome from "../app/pages/welcome/Welcome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />}>
          <Route path=":name" element={<PreviousProject />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
