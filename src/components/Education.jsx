import React from "react";
import { Timeline } from "../components/ui/timeline";
import { SectionWrapper } from "../hoc";
import { educations } from "../constants";

const heading = { heading: "Academic Milestones" };
function Education() {
  return (
    <div className="w-full">
      <Timeline data={educations} heading={heading} />
    </div>
  );
}

export default SectionWrapper(Education, "education");
