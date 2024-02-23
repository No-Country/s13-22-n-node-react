import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/MenuMain/Menu";
import { Header } from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import { useState } from "react";

export default function Root() {
  const [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);

  const links = [
    { text: "Hamburguesas", url: "#Hamburguesas" },
    { text: "Pizza", url: "#Pizza" },
    { text: "Pollo", url: "#Pollo" },
    { text: "Acerca", url: "/#about" }
  ];
  /* Root es el app.jsx para react router dom  */
  return (
    <>

      <Header links={links} cart={cart} total={total} setCart={setCart} setTotal={setTotal} />
    <main>
      <HeroSection/>
      <Menu cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
      <AboutUs />
    </main>
    </>
  );
}
