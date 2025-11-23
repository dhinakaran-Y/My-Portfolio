import { useEffect, useState } from "react";
import TheTechStackPill from "../TheTechStackPill";
import stackData from "../../data/stacks-data.json";

const SkillsSection = () => {
   const [visible, setVisible] = useState(false);

   const minScreenY = 800;

   const [screenY, setScreenY] = useState();

   window.addEventListener("scroll", () =>{
    // console.log(pageYOffset);
     setScreenY(pageYOffset);
   });

   useEffect(() => {
     if (screenY > minScreenY) {
       setVisible(true);
     }
   }, [screenY, visible]);


  return (
    <div className="mx-40 my-20 overflow-hidden">
      <div className={`mx-auto w-fit text-center`}>
        <h2 className="text-5xl font-bold text-custom-green">Skills</h2>
        <h4 className="text-3xl mt-5 font-semibold text-gray-500">
          What tech stacks I know
        </h4>
      </div>
      {/* <div className="grid grid-cols-5 gap-y-10 my-15 justify-items-center"> */}
      <div className={`scroll-container overflow-hidden relative whitespace-nowrap transition-all duration-2000 transform ${ visible ? "translate-x-0 opacity-100" : "translate-x-100 opacity-0"}`}>
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


export default SkillsSection