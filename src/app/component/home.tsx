"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Profilepic from "../../../public/home-img.webp";

export default function Homesection() {
  useEffect(() => {
    // Ensure DOM manipulation happens after component mounts
    const words = document.querySelectorAll(".word") as NodeListOf<HTMLElement>;
    words.forEach((word) => {
      let letters = word.textContent ? word.textContent.split("") : [];
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    const changeText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

      
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out"; 
        }, i * 80); 
      });

      // Transition to next word
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });

      
      currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    
    changeText();
    const interval = setInterval(changeText, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="home min-h-screen grid grid-cols-1 md:grid-cols-2 gap-16 px-10 py-24 bg-[#250821] text-[#f5f5f5]" id="home">
      <div className="home-content max-w-[600px]">
        <h1 className="text-3xl font-extrabold mb-6">{"Hi I'm Tahira Rajput"}</h1>
        <div className="change-text mb-6">
          <h3 className="inline-block mr-2">{"And I'm "}</h3>
          <h3>
            <span className="word inline-block opacity-0">Web Developer</span>
            <span className="word inline-block opacity-0">Frontend Developer</span>
            <span className="word inline-block opacity-0">UI/UX Designer</span>
            <span className="word inline-block opacity-0">Programmer</span>
          </h3>
        </div>
        <p className="mb-6 text-lg font-semibold">
         {" Creative web designer and frontend developer, crafting impactful digital experiences to help brands shine online"}
        </p>
        <div className="info-box mb-6">
          <div className="email-info mb-3">
            <h5 className="font-bold">Email:</h5>
            <span>tara3785581@gmail.com</span>
          </div>
          <div className="linkedin-info">
            <h5 className="font-bold">LinkedIn:</h5>
            <span>linkedin.com/in/tahira-rajput-983aa82b6</span>
          </div>
        </div>
        <div className="btn-box mb-6 space-x-4">
          <Link href="#" className="px-6 py-3 bg-[#12f7ff] text-[#250821] rounded-md hover:bg-[#0a1d28] transition duration-300">Download CV</Link>
          <Link href="#" className="px-6 py-3 bg-[#12f7ff] text-[#250821] rounded-md hover:bg-[#0a1d28] transition duration-300">Hire Me Now!</Link>
        </div>
        <div className="social-icons space-x-4">
          <Link href="#" className="text-[#12f7ff] text-2xl">
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link href="#" className="text-[#12f7ff] text-2xl">
            <i className="bx bxl-instagram"></i>
          </Link>
          <Link href="#" className="text-[#12f7ff] text-2xl">
            <i className="bx bxl-linkedin-square"></i>
          </Link>
          <Link href="#" className="text-[#12f7ff] text-2xl">
            <i className="bx bxl-twitter"></i>
          </Link>
          <Link href="#" className="text-[#12f7ff] text-2xl">
            <i className="bx bxl-github"></i>
          </Link>
          <Link href="#" className="text-[#12f7ff] text-2xl">
            <i className="bx bxl-skype"></i>
          </Link>
        </div>
      </div>
      <div className="home-image">
        <div className="image-box">
          <Image src={Profilepic} alt="pic" className="w-full h-auto object-cover shadow-xl" />
        </div>
      </div>
    </section>
  );
}
