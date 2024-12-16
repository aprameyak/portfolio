'use client';
import Image from "next/image";
import styles from '../style/aboutstyles.css';


const HomeSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="{styles.aboutme}"
    >
      <div 
        className="{styles.aboutmetext}"
      >
        <h2 
          className="{styles.color3}"
        >
          I am a student at the
        </h2>
        <span 
          className="{styles.nowrap} {styles.uni}"
        >
          <h1 
            className="{styles.color2}"
          >
            University of Maryland
          </h1>
          <h1 
            className="{styles.color3}"
          >
            .
          </h1>
        </span>
        <h3 
          className="color3"
        >
          I am invested in the future of computing:
        </h3>
        <div 
          className="focustext"
        >
          <h3 
            className="color3"
          >
            Focusing on 
          </h3>
          <h3>
            &nbsp;
          </h3>
          <span 
            className="nowrap color1"
          >
            software development
          </span>
          <h3 
            className="color3"
          >
            , 
          </h3>
          <h3>
            &nbsp;
          </h3>
          <span 
            className="nowrap color1"
          >
            cloud computing
          </span>
          <h3 
            className="color3"
          >
            , and
          </h3>
          <h3>
            &nbsp;
          </h3>
          <span 
            className="nowrap color1"
          >
            artificial intelligence
          </span>
          <h3 
            className="color3"
          >
            .
          </h3>
        </div>
        <div 
          className="socials"
        >
          <div 
            className="github-picture"
          >
            <a 
              href="https://www.github.com/aprameyak/"
            >
              <Image 
                src="/github.jpg" 
                alt="" 
                width={50} 
                height={50} 
              />
            </a>
          </div>
          <div 
            className="linkedin-picture"
          >
            <a 
              href="https://www.linkedin.com/in/aprameyak/"
            >
              <Image 
                src="/linkedin.jpg" 
                alt="" 
                width={50} 
                height={50} 
              />
            </a>
          </div>
          <div 
            className="medium-picture"
          >
            <a 
              href="https://medium.com/@aprameyakannan"
            >
              <Image
                src="/medium.jpg" 
                alt="" 
                width={50} 
                height={50} 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
