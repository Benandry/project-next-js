'use client';

import React from "react";
import dynamic from "next/dynamic";
import Home from "@/components/pages/Home";
import Skills from "@/components/pages/Skills";
import Experiences from "@/components/pages/Experiences";
import Education from "@/components/pages/Education";
import Projects from "@/components/pages/Project";
import Contact from "@/components/pages/Contact";

const Typewriter = dynamic(() => import('react-typewriter-effect'), { ssr: false });

const Page = () => {
  return (
   <>
   <Home/>
   <Skills/>
   <Experiences/>
   <Education/>
   <Projects/>
   <Contact/>
   </>
  );
};

export default Page;
