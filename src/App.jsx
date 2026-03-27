// import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Blueprint from "./sections/Blueprint";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
// import TransitionSpacer from "./components/TransitionSpacer";
import TransitionSpacer from './components/TransitionSpacer';

const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <ShowcaseSection />
    <LogoShowcase />
    {/* <FeatureCards /> */}
    <Experience />
    <TechStack />
    {/* <Testimonials /> */}
    <Blueprint />
    <TransitionSpacer />
    <Contact />
    <Footer />
  </>
);

export default App;
