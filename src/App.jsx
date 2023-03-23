import { Clients } from "./components/Clients";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { Works } from "./components/Works";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Reviews />
      <Services />
    </>
  );
}

export default App;
