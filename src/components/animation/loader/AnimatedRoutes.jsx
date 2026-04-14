import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Loader from "../loader/Loader";

// الصفحات
import Hero from "../../Hero";
import AboutMe from "../../AboutMe";
import Skills from "../../Skills";
import MyProjects from "../../MyProjects";
import ContactMe from "../../ContactMe";
import About from "../../pages/About";
import ProjectsSection from "../../pages/projects/ProjectsSection";
import Contacts from "../../pages/Contacts";
import ProjectDetails from "../../pages/projects/ProjectDetails";

export default function AnimatedRoutes() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [loading, setLoading] = useState(false);

  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname;
      setLoading(true);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Loader */}
      {loading && (
        <Loader
          onChangePage={() => {
            // تغيير الصفحة تحت الغطاء
            setDisplayLocation(location);
          }}
          onFinish={() => {
            // نقفل اللودر بعد ما animation يخلص بالكامل
            setLoading(false);
          }}
        />
      )}

      {/* Routes */}
      <Routes location={displayLocation}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Skills />
              <MyProjects />
              <ContactMe />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}
