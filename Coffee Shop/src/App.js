import "./App.css";
import BrewingEquipment from "./Containers/BrewingEquipment/BrewingEquipment";
import OurArticles from "./Containers/OurArticles/OurArticles";
import OurCoffee from "./Containers/OurCoffee/OurCoffee";
import NavBar from "./Components/NavBarCoffee/NavBar";
import Banner from "./Containers/Banner/Banner";

function App() {
  return (
    <>
      <NavBar />
      <Banner />

      <OurCoffee />

      <BrewingEquipment />
      <OurArticles />
    </>
  );
}

export default App;
