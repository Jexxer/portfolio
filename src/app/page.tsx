import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div id="home-content" className="px-[50px] md:px-[100px] lg:px-[150px]">
        {/* <Background /> */}
        {/* <ContentCard /> */}
        <Hero />
        <div className="h-screen bg-transparent p-"></div>
      </div>
    </div>
  );
};

export default App;

console.log;
