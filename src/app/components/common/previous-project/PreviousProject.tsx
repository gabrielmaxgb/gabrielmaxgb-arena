import { useParams } from "react-router-dom";

const PreviousProject = () => {
  const params = useParams();

  return <div>Project {params.name}</div>;
};

export default PreviousProject;
