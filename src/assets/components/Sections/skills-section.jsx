import { useEffect, useState } from "react";
import TheTechStackPill from "../TheTechStackPill";
import stackData from "../../data/stacks-data.json";

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);

  const minScreenY = 300;

  const [screenY, setScreenY] = useState();

  window.addEventListener("scroll", () => setScreenY(pageYOffset));

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-40 my-20">
      <div className="mx-auto w-fit text-center">
        <h2 className="text-7xl font-bold text-custom-green">Skills</h2>
        <h4 className="text-4xl mt-5 font-semibold text-gray-500">
          What tech stacks I know
        </h4>
      </div>
      {/* <div className="grid grid-cols-5 gap-y-10 my-15 justify-items-center"> */}
      <div className="scroll-container overflow-hidden relative whitespace-nowrap">
        <div
          id="skill-div"
          className="flex *:mr-10 my-25 w-full scroll-anim"
        >
          {[...stackData, ...stackData, ...stackData, ...stackData].map(
            (stack, index) => {
              return (
                <TheTechStackPill
                  path={stack.path}
                  key={index}
                  stackName={stack.name}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};


export default SkillsSection