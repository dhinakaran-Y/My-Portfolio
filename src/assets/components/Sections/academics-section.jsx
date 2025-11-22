import TheStudyCard from "../TheStudyCard";
import academicData from "../../data/academics-data.json";

const AcademicsSection = () => {
  return (
    <div className="mx-25 justify-self-center my-30">
      <div className="mx-auto mb-20 w-fit text-center">
        <h2 className="text-5xl font-bold text-custom-green">Academics</h2>
      </div>
      <div className="">
        <div className="space-y-10 relative">
          <div className="border-l-3 border-custom-green absolute h-[80%] top-10 left-[19px] -z-10">{/* line */}</div>
          {academicData.map((work , index) => {
            return <TheStudyCard  role={work.role} where={work.where} years={work.when} key={index}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicsSection