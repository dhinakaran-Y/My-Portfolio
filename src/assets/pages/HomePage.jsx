import AboutSection from "../components/Sections/about-section";
import AcademicsSection from "../components/Sections/academics-section";
import ContactSection from "../components/Sections/contact-section";
import TheLeftLinkSection from "../components/Sections/left-side-link-section";
import ProfileSection from "../components/Sections/profile-section";
import ProjectSection from "../components/Sections/project-section";
import TheRightLinkSection from "../components/Sections/right-side-link-section";
import SkillsSection from "../components/Sections/skills-section";
import TheTopNavigateBtn from "../components/TheTopNavigateBtn";

const HomePage = () => {  
  return (
    <section>
      <TheLeftLinkSection />
      <TheRightLinkSection />
      <ProfileSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <AcademicsSection />
      <ContactSection />
      <TheTopNavigateBtn/>
    </section>
  );
};

export default HomePage;
