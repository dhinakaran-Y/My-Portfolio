import { useState, useEffect } from "react";
import TheTechStackPill from "../components/TheTechStackPill";
import stackData from "../data/stacks-data.json";

const SkillsPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`xl:mx-auto xl:w-7xl xl:my-20 overflow-hidden ${`max-sm:w-90 max-sm:mx-auto`}`}>
      <div className={`mx-auto w-fit text-center`}>
        <h2
          className={`xl:text-5xl font-bold text-custom-green ${`max-sm:text-3xl`} ${`sm:text-4xl`}`}>
          Skills
        </h2>
        <h4
          className={`xl:text-3xl xl:mt-5 xl:font-semibold text-gray-500 ${`max-sm:text-xl`} ${`sm:text-2xl`}`}>
          What tech stacks I know
        </h4>
      </div>
      {/* <div className="grid grid-cols-5 gap-y-10 my-15 justify-items-center"> */}
      {/* skill-static */}
      <div
        className={`md:hidden my-15 justify-items-center overflow-hidden transition-all duration-2000 transform  ${
          visible ? "translate-x-0 opacity-100" : "translate-x-100 opacity-0"
        }`}>
        <div
          id="skill-div"
          className={`max-sm:grid max-sm:grid-cols-3 max-sm:gap-5 ${`max-md:grid max-md:grid-cols-5 max-md:gap-5`}`}>
          {[...stackData].map((stack, index) => {
            return (
              <TheTechStackPill
                path={stack.path}
                key={index}
                stackName={stack.name}
                known={stack.known}
              />
            );
          })}
        </div>
      </div>
      {/* skill scroll */}
      <div
        className={`max-md:hidden w-[80vw] mx-auto 2xl:w-7xl scroll-container overflow-hidden relative whitespace-nowrap transition-all duration-2000 transform ${
          visible ? "translate-x-0 opacity-100" : "translate-x-100 opacity-0"
        }`}>
        <div
          id="skill-div"
          className={`flex *:mr-10 my-25 w-full scroll-anim ${`max-sm:my-10 max-sm:*:mr-3`}`}>
          {[...stackData, ...stackData, ...stackData, ...stackData].map(
            (stack, index) => {
              return (
                <TheTechStackPill
                  path={stack.path}
                  key={index}
                  stackName={stack.name}
                  known={stack.known}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;