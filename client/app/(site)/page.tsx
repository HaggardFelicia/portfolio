// displays about info/welcome page
import Image from "next/image";
import me from "../assets/me.png"
import { HiDocumentDownload } from "react-icons/hi";

export default function Home() {
  return (
    <main className="">
      <div className="welcome">
        <h1 className="responive-heading-text">Hello I&apos;m <span className=" responsive-special-text">Felicia</span>!</h1>
      <Image
        src={me}
        className="my-image" alt={"Image of Felicia Haggard"}      />
      </div>
      <div className="about">
        <h2 className="tech-h2">My Tech Stack</h2>
        <p className="tech-p">React</p>
        <p className="tech-p">TypeScript</p>
        <p className="tech-p">JavaScript</p>
        <p className="tech-p">Next.js</p>
        <p className="tech-p">Sanity</p>
        <p className="tech-p">SASS</p>
      </div>
    </main>
  );
}
