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

  // نخزن مكان السكرول لكل صفحة
  const scrollPositions = useRef({});

  // منع scroll restoration من المتصفح
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // عند تغيير الصفحة: نحفظ مكانك
  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      scrollPositions.current[prevPath.current] = window.scrollY;

      prevPath.current = location.pathname;
      setLoading(true);
    }
  }, [location.pathname]);

  // عند عرض الصفحة: رجّع السكرول لمكانه
  useEffect(() => {
    const savedPosition =
      scrollPositions.current[displayLocation.pathname] || 0;

    window.scrollTo(0, savedPosition);
  }, [displayLocation]);

  return (
    <>
      {/* Loader */}
      {loading && (
        <Loader
          onChangePage={() => {
            setDisplayLocation(location);
          }}
          onFinish={() => {
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
