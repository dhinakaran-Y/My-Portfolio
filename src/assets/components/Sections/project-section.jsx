import TheProjectCard from "../TheProjectCard";
import projectsData from "../../data/projects-data.json"

const ProjectSection = () => {
    return (
      <div
        className={`${`xl:mx-auto xl:w-7xl xl:my-30`} ${`lg:mx-15 lg:my-30`} ${`sm:mx-20`} ${`md:mx-10 md:my-30`} ${`max-sm:mx-15`}`}>
        <div
          className={`mx-auto ${`xl:mb-20`} ${`lg:mb-15`} w-fit text-center mb-10`}>
          <h2
            className={`${`xl:text-5xl`} ${`lg:text-4xl`} font-bold text-center text-custom-green ${`sm:text-3xl`} ${`md:text-3xl`} ${`max-sm:text-3xl`}`}>
            My Projects
          </h2>
        </div>
        <div className={`*:mb-20`}>
          {projectsData.map((projects, index) => {
            return (
              <TheProjectCard
                imgPath={projects.imgPath}
                title={projects.title}
                desc={projects.desc}
                usedStacks={projects.usedStacks}
                live={projects.liveLink}
                source={projects.sourceLink}
                key={index}
                projectNo={projects.id}
              />
            );
          })}
        </div>
      </div>
    );
}

export default ProjectSection