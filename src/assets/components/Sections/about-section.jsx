import { useEffect, useState } from "react";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);

  const minScreenY = 250;

  const [screenY , setScreenY] = useState()

  window.addEventListener("scroll" , () => setScreenY(pageYOffset));

  useEffect(() => {
    if(screenY > minScreenY) {
      setVisible(true)
    }
  }, [screenY , visible]);

  return (
    <div
      className={`${`xl:mx-25 xl:my-20`} ${`lg:mx-10 lg:my-20`} ${`sm:mx-auto sm:my-20`} overflow-hidden ${`max-sm:w-90 max-sm:mx-auto max-sm:my-10`}`}>
      <div
        className={`${`xl:mx-auto xl:text-[300px] xl:w-6xl`} font-sans ${`lg:mx-auto lg:text-[180px] lg:w-2xl`} font-extrabold ${`max-sm:text-[100px] max-sm:w-full max-sm:mx-3`} ${`sm:w-md sm:text-[125px] sm:mx-auto`} relative text-custom-green/20 transition-all duration-3000 transform ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-100 opacity-20"
        }`}>
        ABOUT
        <div
          className={`absolute font-Titillium-Web ${`xl:ml-5 xl:inset-y-37 xl:text-4xl xl:w-5xl xl:leading-relaxed`} ${`lg:inset-y-17 lg:text-2xl lg:w-2xl lg:leading-relaxed`} text-white font-normal ${`max-sm:m-0 max-sm:inset-0 max-sm:text-sm max-sm:w-[340px] max-sm:inset-y-9`} ${`sm:m-0 sm:inset-0 sm:text-base sm:w-md sm:inset-y-12.5 sm:inset-x-1`} transition-all duration-3000 delay-100 transform ${
            visible ? "translate-x-0 opacity-100" : "translate-x-300 opacity-20"
          }`}>
          I'm a passionate front-end developer with a Bachelor's degree in
          Computer Science and Engineering. I'm eager to work in industrial
          companies. I'm a good team player, and my daily hobby is upskilling.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
