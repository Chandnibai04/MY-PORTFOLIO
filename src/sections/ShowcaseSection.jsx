import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    [rydeRef.current, libraryRef.current, ycDirectoryRef.current].forEach((card, index) => {
      gsap.fromTo(card, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
        scrollTrigger: { trigger: card, start: "top bottom-=100" },
      });
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">

          {/* Project 1 – Cyber Nexus (large left card) */}
          <div
            ref={rydeRef}
            className="first-project-wrapper"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://cyber-nexus-beta.vercel.app/", "_blank")}
          >
            <div className="image-wrapper">
              <img
                src="/images/project-cyberhub.jpg"
                alt="Cyber Nexus – Cybersecurity Script Sharing Platform"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="text-content">
              <h2>Cyber Nexus – Script Sharing Platform</h2>
              <p className="text-white-50 md:text-xl">
                A cybersecurity script-sharing platform where users can create public and private repositories, upload scripts, manage access permissions, and collaborate securely. Built with React.js, Node.js, Express.js, MongoDB and JWT Authentication.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">

            {/* Project 2 – Resume Builder */}
            <div
              className="project"
              ref={libraryRef}
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://resume-builder-bay-ten.vercel.app/", "_blank")}
            >
              <div className="image-wrapper bg-[#1a1a1a]">
                <img
                  src="/images/project-resumebuilder.png"
                  alt="Professional Resume Builder"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h2>Professional Resume Builder App</h2>
            </div>

            {/* Project 3 – Padel Court Booking */}
            <div
              className="project"
              ref={ycDirectoryRef}
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://github.com/Chandnibai04", "_blank")}
            >
              <div className="image-wrapper bg-[#0a1628]">
                <img
                  src="/images/project-padel.png"
                  alt="Padel Court Booking System"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h2>Padel Court Booking System</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
