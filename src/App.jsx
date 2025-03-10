import "./App.css";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PartOne from "./Components/PartOne";
import Stats from "./Components/Stats";
import SuccessStories from "./Components/SuccessStories";

function App() {
  return (
    <div className="main">
      <Header />
      <PartOne />
      <Stats />
      <Categories />
      <SuccessStories/>
    </div>
  );
}

export default App;
