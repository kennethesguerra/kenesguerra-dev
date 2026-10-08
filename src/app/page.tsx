'use client'

import { useEffect } from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
    
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <main className="main">
      <NavBar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
