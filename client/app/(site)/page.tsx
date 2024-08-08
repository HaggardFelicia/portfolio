// displays about info/welcome page
import Image from "next/image";
import me from "../assets/me.png"
import { HiDocumentDownload } from "react-icons/hi";
import { getSkills } from "@/sanity/sanity-utils";
import skill from "@/sanity/schemas/skill-schema";
import { FaReact } from "react-icons/fa6";
import { SiJavascript, SiSanity, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";

// if date is within 2 months current bring in the skill image and name
// const skills = await getSkills();
//   let date = new Date();
//   const currentDate = date.setFullYear(2024,1,1);
//   let prevDate = skill.Last_Used;

  // if(prevDate<currentDate)
export default async function Home() {
  
  return (
    <main className="">

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
        <div className="school">
          <h2 className="about-h2">Schools Attended</h2>
        </div>
      </div>

    </main>
  );
}
