import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/MenuMain/Menu";
import { Header } from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import { CardDetail } from "./components/CardDetail/CardDetail";


export default function Root() {


  /* Root es el app.jsx para react router dom  */
  return (
    <>
      <Header/>
      <main>
        <HeroSection />
        <Menu />
        <CardDetail />
        <AboutUs />
      </main>
    </>
  );
}
