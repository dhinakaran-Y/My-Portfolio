import TheProjectCard from "../TheProjectCard";
import projectsData from "../../data/projects-data.json"

const ProjectSection = () => {
    return (
      <div className="mx-25 my-30">
        <div className="mx-auto mb-20 w-fit text-center">
          <h2 className="text-5xl font-bold text-custom-green">My Projects</h2>
        </div>
        <div className="*:mb-20">
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
              />
            );
          })}
          
        </div>
      </div>
    );
}

export default ProjectSection