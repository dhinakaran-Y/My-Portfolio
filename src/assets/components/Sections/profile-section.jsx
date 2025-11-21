import { useEffect, useState } from "react";

const ProfileSection = () => {

  const [visible , setVisible] = useState(false)  

  useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true)
      },2000)

      return () => clearTimeout(timer)
  },[])

  return (
    <div className="mx-25 flex mb-5 mt-2 space-x-50">
      <div className={`transition-all duration-2000 delay-500 transform ${visible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}>
        <img className="w-[30vw]" src="public/Images/profile.png" alt="dhina-profile-img" />
      </div>
      <div className={`w-[40vw] space-y-3 mt-30 transition-all duration-2000 delay-500 transform ${visible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}>
        <h2 className="text-7xl font-bold">Hi,I'm</h2>
        <h2 className="text-7xl font-bold text-custom-green">Dhinakaran Y</h2>
        <h4 className="text-6xl font-semibold text-gray-500">
          Front-end Developer
        </h4>
        <p className="text-4xl leading-relaxed">
          I'm a person traveling on my journey in the tech world, willing to
          ride different types of tech stacks...
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;