import { useContexto } from "../../hooks";
import trevolotofacil from "../../assets/trevo-lotofacil.png";
import "./index.css";

function Lotofacil(): JSX.Element {
    const { lotofacil } = useContexto();
    function Ganhadores() {
        if (lotofacil.quantidadeGanhadores === 0) {
            return "ACUMULOU!"
        } if (lotofacil.quantidadeGanhadores === 1) {
            return `${lotofacil.quantidadeGanhadores} GANHADOR`
        } else {
            return `${lotofacil.quantidadeGanhadores} GANHADORES`
        }
    }
    return (
        <>
            <div style={{ display: "flex" }}>

                <div className="bloco1">
                    <div className="jogo"><img src={trevolotofacil}></img> LOTOFÁCIL</div>
                    <div className="palavra">Estimativa de prêmio do próximo concurso. Sorteio em {lotofacil.dataProximoConcurso}:</div>
                    <div className="premio">{lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                    <br/>
                </div>
                <div>
                    <section className="container-flex">
                        <div className="teste">{lotofacil.dezenas ? lotofacil.dezenas.map((el) => {
                            return <div className="teste">{el}</div>
                        }) : ""}</div></section>
                    <div className="ganhou">{Ganhadores()}</div>
                    <div className="concurso">Concurso {lotofacil.numeroDoConcurso} {lotofacil.dataPorExtenso}</div>
                    <br/>
                </div>

            </div>

            {/* <section className="container-flex">
        <div className="modelo">{ lotofacil.dezenas?lotofacil.dezenas.map((el)=>{
            return <div className="teste">{el}</div>
        }):""}</div></section>
        <div className="ganhou">{Ganhadores()}</div>
        <div className="concurso">Concurso {lotofacil.numeroDoConcurso} {lotofacil.dataPorExtenso}</div>
        </div> */}
        </>
    );
}
export default Lotofacil;