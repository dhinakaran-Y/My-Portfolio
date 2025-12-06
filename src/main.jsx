import { createRoot } from 'react-dom/client'
import { HashRouter , Route, Router ,Routes } from 'react-router-dom'
import MainLayout from './assets/layouts/MainLayout'
import HomePage from './assets/pages/HomePage'
import AboutPage from './assets/pages/AboutPage'
import ProjectSection from './assets/components/Sections/project-section'
import ProjectPage from './assets/pages/ProjectPage--no'
import SkillsSection from './assets/components/Sections/skills-section'
import AcademicsSection from './assets/components/Sections/academics-section'
import ContactSection from './assets/components/Sections/contact-section'
import SkillsPage from './assets/pages/SkillsPage'
import AcademicsPage from './assets/pages/AcademicsPage--no'
import ContactPage from './assets/pages/ContactPage'

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="project" element={<ProjectSection />} />
        <Route path="skill" element={<SkillsPage/>} />
        <Route path="academics" element={<AcademicsSection/>} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </HashRouter>
);