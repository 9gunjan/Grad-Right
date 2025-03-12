import "./App.css";
import Categories from "./Components/Categories";
import Faq from "./Components/Faq";
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
      <Faq/>
    </div>
  );
}

export default App;
