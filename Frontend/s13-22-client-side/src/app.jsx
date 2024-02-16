import AboutUs from "./components/AboutUs/AboutUs";
import { Header } from "./components/Header/Header";

export default function Root() {
  /* Root es el app.jsx para react router dom  */
  return (
    <>
      <Header/>
    <main>
      <section className="Hero">

      </section>

      <AboutUs />


    </main>

    </>
  );
}
