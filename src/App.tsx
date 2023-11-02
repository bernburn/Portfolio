
import NavBar from "./NavBar";
import Header from "./Header";
import HomePage from "./HomePage"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Footer from "./Footer"


function App() {
  return (
    <>
        <NavBar />
        <Header />
        <HomePage />
          <hr className=" h-[3px] mt-5 mx-5 bg-cyan-300"></hr>
          <hr className=" h-[2px] mt-3 mx-8 bg-cyan-300"></hr>
        <AboutMe />
        <hr className=" h-[3px] mt-5 mx-5 bg-cyan-300"></hr>
        <hr className=" h-[2px] mt-3 mx-8 bg-cyan-300"></hr>
        <Projects />
      <div className="h-2 mb-20"></div>
        <Footer />
    </>
  );
}

export default App;
