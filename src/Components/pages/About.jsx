import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate(-1)}>Back to Home</button>
      {/* or  navigate('/') to jump directly to home*/}
    </div>
  );
};

export default About;
