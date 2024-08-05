import Link from 'next/link'
import React from 'react'
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import { SiGlassdoor } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";


export default function PageFooter() {
  return (
    <footer className="footer">
          <p className="copyright">Made by Felicia Haggard</p>
          <div className="footer-links-container">
            <Link href="https://github.com/HaggardFelicia" target='_blank' className="footer-links"><FaGithubAlt/></Link>

            <Link href="https://www.linkedin.com/in/haggardwebdev/" target='_blank' className="footer-links"><FaLinkedinIn /></Link>

            <Link href="https://www.facebook.com/HaggardWebDev/" target='_blank' className="footer-links"><FaFacebookF/></Link>
          </div>
        </footer>
  )
}
