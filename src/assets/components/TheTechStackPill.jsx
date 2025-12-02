const TheTechStackPill = ({
  path = "https://github.com/dhinakaran-Y.png",
  stackName = "stack",
  known = 50
}) => {
  return (
    <div
      title={stackName}
      className={`w-23 h-36 rounded-full flex-none relative overflow-hidden bg-custom-gray ${`max-sm:w-14 max-sm:h-21`}`}>
      <img
        src={path}
        alt="JS-img"
        className="object-center absolute h-[80%] object-contain top-0 left-0 p-2"
      />
      <p className={`text-xl text-gray-500 font-semibold text-center absolute bottom-3 left-7 ${`max-sm:text-sm max-sm:left-4 max-sm:bottom-1.5`}`}>
        {known}%
      </p>
    </div>
  );
};

export default TheTechStackPill;
