import ContentCard from "./components/home/ContentCard";
import NavBar from "./components/NavBar";
import Background from "./components/Background";

const App = () => {
  return (
    <main className="w-full h-screen snap-mandatory snap-y overflow-scroll">
      <Background />
      <NavBar />
      <ContentCard />
      <div className="w-full h-screen  snap-start"></div>
      <div className="w-full h-screen snap-start"></div>
    </main>
  );
};

export default App;
