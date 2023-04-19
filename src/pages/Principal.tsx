import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import { useContexto } from "../hooks";
import "./Principal.css"; 
//import "@fontsource/roboto"; // Defaults to weight 400.

function Principal(){
    const {megasena, lotofacil} = useContexto();
    return (
        <>
        {megasena.numeroDoConcurso?<div><Megasena/></div>: <div className="carregar"><h1>Carregando...</h1></div>}
        <hr/>
        {lotofacil.numeroDoConcurso?<div><Lotofacil/></div>: <div></div>}
        </>
    );
}
export default Principal;