// images
import conceptImage from "../assets/concept.png";
import commercialImage from "../assets/commercial.png";
import flowImage from "../assets/flow-chart.png";
import budgetImage from "../assets/budget-planning.png";

import SectionOutlien from "./sectionOutline";
import WorkCard from "./work-card";
const WorkContainer = () => {
  return (
    <>
      <SectionOutlien />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <WorkCard
          backgroundColor="rgb(231, 193, 211)"
          image={conceptImage}
          heading="Concept"
          text="The concept is pretty simple. we will make a stunning concept for the building"
        />
        <WorkCard
          backgroundColor="rgb(239, 218, 110)"
          image={flowImage}
          heading="Design Process"
          text="The Design Process is a normalize systematic approach to get ahead in a robust design."
        />
        <WorkCard
          backgroundColor="rgb(164, 218, 195)"
          image={commercialImage}
          heading="Supervision"
          text="The concept is pretty simple. we will make a stunning concept for the building"
        />
        <WorkCard
          backgroundColor="rgb(119, 170, 234)"
          image={budgetImage}
          heading="Budget Planning"
          text="The concept is pretty simple. we will make a stunning concept for the building"
        />
      </div>
    </>
  );
};

export default WorkContainer;
