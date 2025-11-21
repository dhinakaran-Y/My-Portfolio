import { useEffect, useState } from "react";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);

  const minScreenY = 300;

  const [screenY , setScreenY] = useState()

  window.addEventListener("scroll" , () => setScreenY(pageYOffset));

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-25 my-20">
      <div
        className={`mx-auto text-[300px] font-extrabold w-[70vw] relative text-custom-green/20 transition-all duration-2000 delay-500 transform ${
          screenY > minScreenY && visible
            ? "translate-x-0 opacity-100"
            : "-translate-x-30 opacity-0"
        }`}
      >
        ABOUT
        <div
          className={`absolute ml-5 text-white inset-y-37 text-4xl font-normal w-[70vw] leading-relaxed transition-all duration-4000 delay-2000 transform ${
            screenY > minScreenY && visible
              ? "translate-x-0 opacity-100"
              : "translate-x-30 opacity-0"
          }`}
        >
          I'm a passionate front-end developer with a Bachelor's degree in
          Computer Science and Engineering.I'm eager to work in industrial
          companies.I'm a good team player,and my daily hobby is upskilling.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
