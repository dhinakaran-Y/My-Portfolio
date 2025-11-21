import TheProjectCard from "../TheProjectCard";
import TheStackBadge from "../TheStackBadge";

const ProjectSection = () => {
    return (
      <div className="mx-25 my-30">
        <div className="mx-auto mb-20 w-fit text-center">
          <h2 className="text-7xl font-bold text-custom-green">My Projects</h2>
        </div>
        <div className="">
          <TheProjectCard />
        </div>
      </div>
    );
}

export default ProjectSection