import SocialMedia from "./ui/components/SocialMedia";
import AboutMe from "./ui/main-sections/AboutMe";
import Contact from "./ui/main-sections/Contact";
import Experience from "./ui/main-sections/Experience";
import Projects from "./ui/main-sections/Projects";
import WelcomeScreen from "./ui/main-sections/WelcomeScreen";

export default function Home() {

  // JSX
  return (
    <main className="flex flex-col w-full max-w-[1400px] mx-auto px-[200px] xl:px-[130px] lg:px-[80px] md:px-[50px] sm:px-[20px]">

      {/* WELCOME SCREEN */}
      <WelcomeScreen />

      {/* ABOUT ME */}
      <div id="about">
        <AboutMe/>
      </div>

      {/* EXPERIENCE */}
      <div id="experience">
        <Experience />
      </div>

      {/* PROYECTS */}
      <div id="projects">
        <Projects />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>
      
    </main>
  )
}
