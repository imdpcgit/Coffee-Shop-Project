import "./App.css";
import BrewingEquipment from "./Containers/BrewingEquipment/BrewingEquipment";
import OurArticles from "./Containers/OurArticles/OurArticles";
import OurCoffee from "./Containers/OurCoffee/OurCoffee";

function App() {
  return (
    <>
      <OurCoffee />
      <BrewingEquipment />
      <OurArticles />
    </>
  );
}

export default App;
