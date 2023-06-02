import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviousProject from "../app/components/common/previous-project/PreviousProject";
import Home from "../app/pages/home/Home";
import NotFound from "../app/pages/not-found/NotFound";
import PreviousWork from "../app/pages/projects/Projects";
import Welcome from "../app/pages/welcome/Welcome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<PreviousWork />}>
          <Route path=":id" element={<PreviousProject />} />
          {/* <Outlet /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
