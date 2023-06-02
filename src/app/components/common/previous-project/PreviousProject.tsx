import { useParams } from "react-router-dom";

const PreviousProject = () => {
  const params = useParams();

  console.log("params", params);

  return <div>PreviousProject</div>;
};

export default PreviousProject;
