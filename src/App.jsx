// export default function App() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
//       <h1 className="text-4xl font-bold text-white">Asad Portfolio is Working abc✅</h1>
//     </div>
//   )
// }
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
       <Header />
      <Hero />
      <About />
       <Services />
      <Skills />
        <Projects />
        <Achievements/>
        <Contact />
         <Footer />

    </>
  );
}

