import React from "react";
import { Timeline } from "../components/ui/timeline";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";

const heading = { heading: "Professional Journey" };
function Experience() {
  return (
    <div className="w-full">
      <Timeline data={experiences} heading={heading} />
    </div>
  );
}

export default SectionWrapper(Experience, "work"); // here work is the idName which is used for scrolling to the section it is route
