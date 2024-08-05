// displays about info/welcome page
import Image from "next/image";
import me from "../assets/me.png"
import { HiDocumentDownload } from "react-icons/hi";

export default function Home() {
  return (
    <main className="text-gray-400">
      <div className="welcome">
        <h1 className="responive-heading-text">Hello I&apos;m <span className=" responsive-special-text">Felicia</span>!</h1>
      <Image
        src={me}
        className="my-image" alt={"Image of Felicia Haggard"}      />
      </div>
      
    </main>
  );
}
