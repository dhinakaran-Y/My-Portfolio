import { useEffect, useState } from "react";

// ${mobile ? `` : ""}`}

const ProfileSection = () => {

  const [visible , setVisible] = useState(false)  

  // console.log(window.innerWidth);

  useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true)
      },1000)

      return () => clearTimeout(timer)
  },[])

  return (
    <div
      className={`mx-25 flex mb-5 mt-2 space-x-70 overflow-hidden ${`max-sm:mx-5 max-sm:mb-10 max-sm:flex-col max-sm:space-x-0`}`}
      id="profileSection">
      <div
        className={`flex transition-all duration-1500 transform ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
        }`}>
        <img
          className={`w-100 flex-none ${`max-sm:w-60 max-sm:mx-auto max-sm:p-5`}`}
          src="Images/profile.png"
          alt="dhina-profile-img"
        />
      </div>
      <div
        className={`w-[80vw] space-y-3 mt-30 transition-all duration-1500 transform ${
          visible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
        } ${`max-sm:space-x-0 max-sm:my-0 max-sm:w-[90vw] max-sm:mx-auto max-sm:text-center`}`}>
        <h2 className={`text-4xl font-bold ${`max-sm:text-2xl`}`}>Hi,I'm</h2>
        <h2
          className={`text-5xl font-bold text-custom-green ${`max-sm:text-3xl`}`}>
          Dhinakaran Y
        </h2>
        <h4
          className={`text-3xl font-semibold text-gray-500 ${`max-sm:text-xl`}`}>
          Front-end Developer
        </h4>
        <p
          className={`text-2xl leading-relaxed w-md ${`max-sm:text-sm max-sm:w-75 text-balance max-sm:mx-auto`}`}>
          I'm a person traveling on my journey in the tech world, willing to
          ride different types of tech stacks...
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;