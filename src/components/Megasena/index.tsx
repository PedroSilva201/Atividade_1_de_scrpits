import { useContexto } from "../../hooks";
import trevomegasena from "../../assets/trevo-megasena.png"
import "./index.css";

function Megasena() {
    const { megasena } = useContexto();
    function Ganhadores() {
        if (megasena.quantidadeGanhadores === 0) {
            return "ACUMULOU!"
        } if (megasena.quantidadeGanhadores === 1) {
            return `${megasena.quantidadeGanhadores} GANHADOR`
        } else {
            return `${megasena.quantidadeGanhadores} GANHADORES`
        }
    }
    return (
        <>
            <div style={{ display: "flex" }}>
                <div className="bloco2">
                    <div className="jogoM"><img src={trevomegasena}></img> MEGA-SENA</div>
                    <div className="palavraM">Estimativa de prêmio do próximo concurso. Sorteio em {megasena.dataProximoConcurso}:</div>
                    <div className="premioM">{megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                </div>
                <div>
                    <section className="container flex">
                        <div className="modeloM">{megasena.dezenas ? megasena.dezenas.map((el) => {
                            return <div className="testeM">{el}</div>
                        }) : ""}</div></section>
                    <div className="ganhouM">{Ganhadores()}</div>
                    <div className="concursoM">Concurso {megasena.numeroDoConcurso} {megasena.dataPorExtenso}</div>
                </div>
            </div>
        </>
    );
}
export default Megasena;