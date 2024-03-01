import { Header } from "../../components/Header/Header"

export const Team = ()=>{
    const links = [
        { text: "Hamburguesas", url: "#" },
        { text: "Pizza", url: "#" },
        { text: "Pollo", url: "#" },
        { text: "Acerca", url: "/#about" }
      ];
    return(
        <>
        <Header  links={links}/>
        <main>
        <h1>Nuestro equipo</h1>
        </main>
        </>
    )
}