import AboutSection from "../components/Sections/about-section";
import TheLeftLinkSection from "../components/Sections/left-side-link-section";
import ProfileSection from "../components/Sections/profile-section";
import TheRightLinkSection from "../components/Sections/right-side-link-section";

const HomePage = () => {
  return (
    <section>
      <TheLeftLinkSection />
      <TheRightLinkSection/>
      <ProfileSection/>
      <AboutSection/>
    </section>
  );
};

export default HomePage;
