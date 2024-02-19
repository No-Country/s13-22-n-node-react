import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/MenuMain/Menu";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

export default function Root() {
  const links = [
    { text: "Hamburguesas", url: "#" },
    { text: "Pizza", url: "#" },
    { text: "Pollo", url: "#" },
    { text: "Acerca", url: "/#about" }
  ];
  /* Root es el app.jsx para react router dom  */
  return (
    <>
      <Header links={links}/>
    <main>

      <Hero/>

      <Menu />

      <AboutUs />
    </main>
    </>
  );
}
