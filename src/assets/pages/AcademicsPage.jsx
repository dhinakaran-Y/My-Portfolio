import TheStudyCard from "../components/TheStudyCard";
import academicData from "../data/academics-data.json";

const AcademicsPage = () => {
  return (
    <div
      className={`justify-self-center ${`xl:mx-25 xl:my-30`} ${`sm:mx-20`} ${`max-sm:mx-20`}`}>
      <div className={`mx-auto mb-20 sm:mb-10 max-sm:mb-5 w-fit text-center`}>
        <h2
          className={`${`text-5xl`} font-bold text-custom-green ${`sm:text-3xl`} ${`max-sm:text-3xl`}`}>
          Academics
        </h2>
      </div>
      <div className="">
        <div className={`space-y-10 relative`}>
          <div
            className={`border-l-3 border-custom-green absolute h-[78%] top-10 left-[19px] -z-10 ${`sm:top-11`} ${`max-sm:top-11`}`}>
            {/* line */}
          </div>
          {academicData.map((work, index) => {
            return (
              <TheStudyCard
                role={work.role}
                where={work.where}
                years={work.when}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage