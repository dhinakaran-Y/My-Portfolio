import profileImg from "../../../../public/Images/profile.png"

const ProfileSection = () => {
  return (
    <div className="mx-25 flex my-5 space-x-50">
      <div className="">
        <img className="w-[30vw]" src={profileImg} alt="dhina-profile-img" />
      </div>
      <div className="w-[40vw] space-y-3 mt-60">
        <h2 className="text-7xl font-bold">Hi,I'm</h2>
        <h2 className="text-7xl font-bold text-custom-green">Dhinakaran Y</h2>
        <h4 className="text-6xl font-semibold text-gray-500">Front-end Developer</h4>
        <p className="text-4xl leading-relaxed">
          I'm a person traveling on my journey in the tech world, willing to
          ride different types of tech stacks...
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;