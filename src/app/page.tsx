import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div id="home-content" className="px-[50px] md:px-[100px] lg:px-[150px]">
        {/* <Background /> */}
        {/* <ContentCard /> */}
        <Hero />
      </div>
    </div>
  );
};

export default App;
