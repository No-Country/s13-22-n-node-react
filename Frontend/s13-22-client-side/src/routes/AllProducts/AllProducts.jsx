import { Header } from "../../components/Header/Header";


export const AllProducts = () => {
    const links = [
        { text: "Hamburguesas", url: "#" },
        { text: "Pizza", url: "#" },
        { text: "Pollo", url: "#" },
        { text: "Acerca", url: "/#about" },
      ];
    return(
          <>
            <Header links={links} />
          <main>
            <h1>Todos los productos</h1>
          </main>
          </>
)
};
