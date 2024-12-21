import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Tech section starts from this file only
// in this we map and traverse to each technology element in technologies array
// and pass the icon of each technology to BallCanvas component
// then we go to BallCanvas component or Ball file to see the implementation of BallCanvas component
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
