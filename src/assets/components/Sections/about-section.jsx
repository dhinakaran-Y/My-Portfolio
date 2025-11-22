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
    <div className="mx-25 my-20 overflow-hidden">
      <div
        className={`mx-auto text-[300px] font-extrabold w-[70vw] relative text-custom-green/20 transition-all duration-3000 transform ${visible ? "translate-x-0 opacity-100" : "-translate-x-100 opacity-20"}`}>
        ABOUT
        <div
          className={`absolute ml-5 text-white inset-y-37 text-4xl font-normal w-[70vw] leading-relaxed transition-all duration-3000 delay-100 transform ${visible ? "translate-x-0 opacity-100" : "translate-x-300 opacity-20"}`}>
          I'm a passionate front-end developer with a Bachelor's degree in
          Computer Science and Engineering.I'm eager to work in industrial
          companies.I'm a good team player,and my daily hobby is upskilling.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
