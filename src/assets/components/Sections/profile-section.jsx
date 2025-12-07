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
      className={`${`xl:mx-auto xl:w-7xl xl:flex xl:flex-row xl:mb-5 xl:mt-2 xl:space-x-50`} ${`lg:justify-self-center lg:mx-auto lg:items-center lg:flex lg:flex-row lg:mb-5 lg:mt-2 lg:space-x-30`} overflow-hidden ${`sm:mx-5 sm:mb-10 sm:flex-col sm:space-x-0`} ${`max-sm:mx-5 max-sm:mb-10 max-sm:flex-col max-sm:space-x-0`}`}
      id="profileSection">
      <div
        className={`xl:flex transition-all duration-1500 transform ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
        }`}>
        <img
          className={`${`lg:w-64`} ${`xl:w-100`} flex-none ${`sm:w-60 sm:mx-auto sm:p-5`} ${`max-sm:w-60 max-sm:mx-auto max-sm:p-5`}`}
          src="Images/profile.png"
          alt="dhina-profile-img"
        />
      </div>
      <div
        className={`${`xl:w-[80vw] xl:space-y-3 xl:mt-30`} ${`lg:w-[40vw] lg:space-y-1 lg:mt-15`} transition-all duration-1500 transform ${
          visible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
        } ${`sm:space-x-0 sm:my-0 sm:w-[90vw] sm:mx-auto sm:text-center`} lg:text-start ${`max-sm:space-x-0 max-sm:my-0 max-sm:w-[90vw] max-sm:mx-auto max-sm:text-center`}`}>
        <h2
          className={`${`xl:text-4xl`} ${`lg:text-3xl`} font-bold ${`sm:text-2xl`} ${`md:text-3xl`} ${`max-sm:text-2xl`}`}>
          Hi,I'm
        </h2>
        <h2
          className={`${`xl:text-5xl`} ${`lg:text-4xl`} font-bold text-custom-green ${`sm:text-3xl`} ${`md:text-4xl`} ${`max-sm:text-3xl`}`}>
          Dhinakaran Y
        </h2>
        <h4
          className={`xl:text-3xl lg:text-2xl font-semibold text-gray-500 ${`sm:text-xl`} ${`md:text-2xl`} ${`max-sm:text-xl`}`}>
          Front-end Developer
        </h4>
        <p
          className={`text-balance ${`xl:text-2xl xl:leading-relaxed xl:w-md`} ${`lg:text-xl lg:leading-relaxed lg:w-md`} ${`sm:text-sm sm:w-80 sm:mx-auto`} ${`md:text-lg md:mt-2`} ${`max-sm:text-sm max-sm:w-75 max-sm:mx-auto`} lg:mx-0`}>
          I'm a person traveling on my journey in the tech world, willing to
          ride different types of tech stacks...
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;