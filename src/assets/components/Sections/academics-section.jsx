import TheStudyCard from "../TheStudyCard";
import academicData from "../../data/academics-data.json";

const AcademicsSection = () => {
  return (
    <div className={`mx-25 justify-self-center my-30 ${`max-sm:mx-20`}`}>
      <div className="mx-auto mb-20 w-fit text-center">
        <h2 className={`text-5xl font-bold text-custom-green ${`max-sm:text-3xl`}`}>Academics</h2>
      </div>
      <div className="">
        <div className="space-y-10 relative">
          <div className={`border-l-3 border-custom-green absolute h-[78%] top-10 left-[19px] -z-10 ${`max-sm:top-11`}`}>{/* line */}</div>
          {academicData.map((work , index) => {
            return <TheStudyCard  role={work.role} where={work.where} years={work.when} key={index}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicsSection