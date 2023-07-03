import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="w-full">
      <div id="home-content">
        {/* <Background /> */}
        <NavBar />
        {/* <ContentCard /> */}
        <Hero />
        <div className="h-screen bg-transparent"></div>
      </div>
    </div>
  );
};

export default App;
