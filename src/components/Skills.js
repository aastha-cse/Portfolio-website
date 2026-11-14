
import skill1 from "../assets/img/skill1.png";
import skill2 from "../assets/img/skill2.png";
import skill3 from "../assets/img/skill3.png";
import skill4 from "../assets/img/skill4.png";
import skill6 from "../assets/img/skill6.png";
import skill7 from "../assets/img/skill7.png";
import skill8 from "../assets/img/skill8.png";
import skill9 from "../assets/img/skill9.png";
import skill10 from "../assets/img/skill10.png";
import skill11 from "../assets/img/skill11.png";
import skill12 from "../assets/img/skill12.png";

import Marquee from "react-fast-marquee";

export const Skills = () => {
  const skills = [
    { name: "C++", image: skill1 },
    { name: "HTML", image: skill2 },
    { name: "JavaScript", image: skill3 },
    { name: "CSS", image: skill4 },
    { name: "Java", image: skill12 },
    { name: "MySQL", image: skill6 },
    { name: "React.js", image: skill7 },
    { name: "Node.js", image: skill8 },
    { name: "Express.js", image: skill9 },
    { name: "MongoDB", image: skill10 },
    { name: "Git", image: skill11 },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <span className="section-eyebrow">WHAT I WORK WITH</span>
          <h2>
            Technical <span>Skills</span>
          </h2>
          <p>
            Technologies and tools I use to build, develop, and maintain
            software applications.
          </p>
        </div>

        <div className="skills-marquee-wrapper">
          <Marquee
            speed={35}
            gradient={true}
            gradientColor="#101114"
            gradientWidth={100}
            pauseOnHover={false}
            className="skills-marquee"
          >
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">
                  <img src={skill.image} alt={skill.name} />
                </div>
                <h5>{skill.name}</h5>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
};
