import {
  About,
  Contact,
  Footer,
  Homepage,
  Navbar,
  Projects,
  Skills,
  Techno,
} from "@/components";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Page() {
  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <Projects />
      <Skills />
      <Techno />
      <Contact />
      <Footer />
    </>
  );
}
