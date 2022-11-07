import { MainContent } from "./aboutSection/about";
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";
import { SkillSets } from "./skillSets/skillSets";

export const Hero = () => {
  return (
    <>
      <MainContent />
      <SkillSets />
      <Experience />
      <Projects />
    </>
  );
};
