import "./App.css";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PartOne from "./Components/PartOne";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="main">
      <Header />
      <PartOne />
      <Stats />
      <Categories />
    </div>
  );
}

export default App;
