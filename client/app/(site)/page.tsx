// displays about info/welcome page
import Image from "next/image";
import me from "../assets/me.png"
import { HiDocumentDownload } from "react-icons/hi";
import { getSkills } from "@/sanity/sanity-utils";
import skill from "@/sanity/schemas/skill-schema";
import { FaReact } from "react-icons/fa6";
import { SiJavascript, SiSanity, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
import Fullsail from '../assets/Fullsail.jpg'
import Marion from '../assets/Marion.jpg'

export default async function Home() {
  
  return (
    <main className="body-container">

      <div className="welcome">
        <h1 className="responive-heading-text">Hello I&apos;m <span className=" responsive-special-text">Felicia Haggard</span>!</h1>
      <Image
        src={me}
        className="my-image" alt={"Image of Felicia Haggard"}      />
      </div>

      <div className="about">
        <h2 className="about-h2">My Tech Stack</h2>
        <div className="tech">
          <div className="tech-container">
            <p className="tech-name">React</p>
            <FaReact className="tech-lcon"/>
          </div>
          <div className="tech-container">
            <p className="tech-name">TypeScript</p>
            <SiTypescript className="tech-lcon"/>
          </div>
          <div className="tech-container">
            <p className="tech-name">JavaScript</p>
            <SiJavascript className="tech-lcon"/>
          </div>
          <div className="tech-container">
            <p className="tech-name">SASS</p>
            <SiSass className="tech-lcon"/>
          </div>
          <div className="tech-container">
            <p className="tech-name tailwind-icon">Tailwind CSS</p>
           <SiTailwindcss className="tech-lcon"/>
          </div>
          <div className="tech-container">
            <p className="tech-name">Sanity.io</p>
            <SiSanity className="tech-lcon"/>
          </div>
        </div>

        <br/>

        <div className="schools">
          <h2 className="about-h2">Schools Attended</h2>

         {/* Marion Co High School */}
        <div className="marion-school-border border" id="Marion">
           <div className=''>
            <Image src={Marion} alt="Marion County High School"  className='school-image' />
          </div>
          <div className='marion-school-text-div school-text-div'>
            <h2 className='marion-school-text-title school-text-title'>Marion County High School</h2>
            <p className="marion-school-grad-date school-grad-date">May 25, 2013</p>
          </div>
        </div>

        {/* Full Sail UNiversity */}
        <div className="Fullsail-school-border border" id="FS">
          <div className=''>
            <Image src={Fullsail} alt="Full Sail University Logo"  className='school-image' />
          </div>

          <div className='Fullsail-school-text-div school-text-div'>
            <h2 className='Fullsail-school-text-title school-text-title'>Full Sail University</h2>
            <p className='responsive-p-text Fullsail-school-p-text '>Associate of Science in Web Development</p>
            <p className="Fullsail-school-grad-date school-grad-date">April 05, 2024</p>
          </div>
        </div>
        </div>
      </div>

    </main>
  );
}
