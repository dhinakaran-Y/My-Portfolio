import { useEffect, useState } from "react";

const ProfileSection = () => {

  const [visible , setVisible] = useState(false)  

  useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true)
      },1000)

      return () => clearTimeout(timer)
  },[])

  return (
    <div
      className="lg:mx-25 lg:flex mb-5 mt-2 space-x-70 overflow-hidden"
      id="profileSection">
      <div
        className={`transition-all duration-1500 transform ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
        }`}>
        <img
          className="w-100 p-10"
          src="Images/profile.png"
          alt="dhina-profile-img"
        />
      </div>
      <div
        className={`w-[40vw] space-y-3 mt-30 transition-all duration-1500 transform ${
          visible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
        }`}>
        <h2 className="text-4xl font-bold">Hi,I'm</h2>
        <h2 className="text-5xl font-bold text-custom-green">Dhinakaran Y</h2>
        <h4 className="text-3xl font-semibold text-gray-500">
          Front-end Developer
        </h4>
        <p className="text-2xl leading-relaxed w-md">
          I'm a person traveling on my journey in the tech world, willing to
          ride different types of tech stacks...
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;