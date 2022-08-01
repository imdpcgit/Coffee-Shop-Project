import "./App.css";
import BrewingEquipment from "./Containers/BrewingEquipment/BrewingEquipment";
import OurArticles from "./Containers/OurArticles/OurArticles";
import OurCoffee from "./Containers/OurCoffee/OurCoffee";
import NavBar from "./Components/NavBarCoffee/NavBar";
import Banner from "./Containers/Banner/Banner";
import SignUp from "./Containers/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      {/* <Banner /> */}

      <OurCoffee />

      <BrewingEquipment />
      <OurArticles />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
