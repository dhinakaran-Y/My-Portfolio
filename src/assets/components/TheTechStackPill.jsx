const TheTechStackPill = ({ path = "https://github.com/dhinakaran-Y.png" , stackName = "stack" }) => {
  return (
    <div
      title={stackName}
      className="w-23 h-36 rounded-full flex-none relative overflow-hidden bg-custom-gray">
      <img
        src={path}
        alt="JS-img"
        className="object-center absolute h-[70%] object-contain top-0 left-0"
      />
      <p className="text-3xl font-semibold text-center absolute bottom-3 left-4">
        80%
      </p>
    </div>
  );
};

export default TheTechStackPill