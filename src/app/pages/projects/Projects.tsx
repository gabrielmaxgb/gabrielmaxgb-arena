import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Link to={`/projects/${1}`}>
        <Button>Go to project 1</Button>
      </Link>
      <Link to={`/projects/${2}`}>
        <Button>Go to project 2</Button>
      </Link>
      <Link to={`/projects/${3}`}>
        <Button>Go to project 3</Button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Projects;
