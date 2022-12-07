import Personal from "./main-components/Personal";
import Education from "./main-components/Education";
import Experience from "./main-components/Experience";

const Main = () => {
  return (
    <div className="main">
      <Personal />
      <Education />
      <Experience />
    </div>
  );
};

export default Main;
