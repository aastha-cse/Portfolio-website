import skill1 from "../assets/img/skill1.png";
import skill2 from "../assets/img/skill2.png";
import skill3 from "../assets/img/skill3.png";
import skill4 from "../assets/img/skill4.png";
import skill5 from "../assets/img/skill5.png";
import skill6 from "../assets/img/skill6.png";
import skill7 from "../assets/img/skill7.png";
import skill8 from "../assets/img/skill8.png";
import skill9 from "../assets/img/skill9.png";
import skill10 from "../assets/img/skill10.png";
import skill11 from "../assets/img/skill11.png";
import Marquee from 'react-fast-marquee';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>During my academic journey I have gained expertise in these programming languages<br></br> C/C++, HTML, JS, CSS, PHP, MySQL<br></br> I am familiar with the React.js, Node.js, and Express.js frameworks and MongoDB database. </p>
                        <Marquee responsive={responsive} infinite={true} direction="left" scrollamount="5" className="skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Images"/>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Images" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Images" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Images" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="Images" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="Images" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt="Images" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={skill8} alt="Images" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={skill9} alt="Images" />
                                <h5>ExpressJS</h5>
                            </div>
                            <div className="item">
                                <img src={skill10} alt="Images" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={skill11} alt="Images" />
                                <h5>Git</h5>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Images" />
    </section>
  )
}
