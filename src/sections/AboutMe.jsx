import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-content",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: { trigger: "#about", start: "top 80%" },
      }
    );
  });

  return (
    <section id="about" className="section-padding padding-x-lg">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="about-content text-center mb-12">
          <p className="text-white-50 uppercase tracking-widest text-sm mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left — text */}
          <div className="about-content flex flex-col gap-6">
            <p className="text-white-50 text-lg leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Chandni Bai</span> — a final-year
              Computer Science student with a passion for building modern web applications and
              transforming data into meaningful insights.
            </p>
            <p className="text-white-50 text-lg leading-relaxed">
              I specialize in <span className="text-white font-semibold">Full-Stack Web Development</span> using
              the MERN stack, and I also have a strong foundation in <span className="text-white font-semibold">Java</span> through
              academic coursework covering OOP, data structures, and algorithms. I love working on projects that combine
              functionality, performance, and clean user experience.
            </p>
            <p className="text-white-50 text-lg leading-relaxed">
              Through internships at the <span className="text-white font-semibold">National Bank of Pakistan</span> and
              the <span className="text-white font-semibold">Bano Qabil Incubation Center</span>, and as
              an <span className="text-white font-semibold">Amal Academy Fellow</span>, I have sharpened both
              my technical skills and professional mindset. I'm driven by curiosity, continuous learning, and a
              genuine love for turning ideas into working software.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-2">
              {["MERN Stack", "Java", "Power BI", "Problem Solver", "Team Player", "CS Final Year"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="about-content grid grid-cols-2 gap-4">
            {[
              { icon: "🎓", title: "Education", desc: "Final Year B.S. Computer Science" },
              { icon: "💼", title: "Experience", desc: "2+ Internships & Amal Fellowship" },
              { icon: "🚀", title: "Projects", desc: "10+ Full-Stack & IoT Projects" },
              { icon: "☕", title: "Java", desc: "OOP, Data Structures & Algorithms" },
              { icon: "🌐", title: "Web Dev", desc: "React, Node, MongoDB, Express" },
              { icon: "🤝", title: "Leadership", desc: "Videography Lead & PR Member" },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-border rounded-xl p-5 flex flex-col gap-2 hover:scale-105 transition-transform duration-300"
              >
                <span className="text-3xl">{icon}</span>
                <h4 className="text-white font-semibold text-base">{title}</h4>
                <p className="text-white-50 text-sm leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
