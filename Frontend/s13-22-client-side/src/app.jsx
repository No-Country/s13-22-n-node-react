import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/MenuMain/Menu";
import { Header } from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import { CardDetail } from "./components/CardDetail/CardDetail";


export default function Root() {

  const links = [
    { text: "Hamburguesas", url: "#Hamburguesas" },
    { text: "Pizza", url: "#Pizza" },
    { text: "Pollo", url: "#Pollo" },
    { text: "Acerca", url: "/#about" },
  ];
  /* Root es el app.jsx para react router dom  */
  return (
    <>
      <Header
        links={links}
      />
      <main>
        <HeroSection />
        <Menu />
        <CardDetail />
        <AboutUs />
      </main>
    </>
  );
}
