import { useParams } from "react-router";

const CourseDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Course Details - {id}</h2>
      <p>Course info will load here...</p>
    </div>
  );
};

export default CourseDetails;
