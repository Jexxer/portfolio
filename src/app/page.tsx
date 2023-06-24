import ContentCard from "./components/home/ContentCard";
import NavBar from "./components/NavBar";
import Background from "./components/Background";

const App = () => {
  return (
    <main className="w-full h-screen">
      <Background />
      <NavBar />
      <ContentCard />
    </main>
  );
};

export default App;
