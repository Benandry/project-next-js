import {
  About,
  Contact,
  Footer,
  Homepage,
  Navbar,
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
      <Skills />
      <Techno />
      <Contact />
      <Footer />
    </>
  );
}
