import TheProjectCard from "../TheProjectCard";
import projectsData from "../../data/projects-data.json"

const ProjectSection = () => {
    return (
      <div className={`mx-25 my-30 ${`max-sm:mx-15`}`}>
        <div className={`mx-auto mb-20 w-fit text-center ${`max-sm:mb-10`}`}>
          <h2 className={`text-5xl font-bold text-custom-green ${`max-sm:text-3xl max-sm:w-41`}`}>My Projects</h2>
        </div>
        <div className={`*:mb-20`}>
          {projectsData.map((projects , index) => {
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