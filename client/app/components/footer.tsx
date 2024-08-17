import Link from 'next/link'
import React from 'react'
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { VscGithubProject } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";


export default function PageFooter() {
  return (
    <footer className="footer">
          <div className="footer-links-container">
            <Link href="https://github.com/HaggardFelicia" target='_blank' className="footer-links"><FaGithubAlt/></Link>
            <div className="break"></div>
            <Link href="https://www.linkedin.com/in/haggardwebdev/" target='_blank' className="footer-links"><FaLinkedinIn /></Link>
            <div className="break"></div>
            <Link href="https://www.facebook.com/HaggardWebDev/" target='_blank' className="footer-links"><FaFacebookF/></Link>
            <div className="break"></div>
            <Link href="" target='_blank' className="footer-links"><VscGithubProject/></Link>
            <div className="break"></div>
            <Link href="" target='_blank' className="footer-links"><GiSkills/></Link>
          </div>
        </footer>
  )
}
