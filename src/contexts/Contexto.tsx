import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import Loteria from "../services/Loteria";

const Contexto = createContext({} as LoteriaProps);

function ContextoProvider({ children }: any) {
  const [megasena, setMegasena] = useState({} as Props);
  const [lotofacil, setLotofacil] = useState({} as Props);
  //teste
  var dados = {
    acumulado: true,
    concursoEspecial: true,
    dataApuracao: true,//"data apuracao", //true,//
    dataPorExtenso: true,//"data por extenso",// true, //
    dataProximoConcurso: true,//"data proximo concurso",//true, //,
    dezenas: /*[]*/["1", "2","3","1", "2","3","1", "2","3","1", "2","3","1", "2","3"],
    numeroDoConcurso: true, //10000,//true,//
    quantidadeGanhadores: true, //2000,//true, //
    tipoJogo: true, //"jogo",//true,//
    valorEstimadoProximoConcurso: true,//100000,/// true,  //
    valorPremio: true,//135000050,//true,//"lalalal",
}
//quando voltar, trocar tudo por true onde tem numeros e aspas
  useEffect(() => {
    //suspenso
     (async () => {
       const resp = await Loteria.get();
       setMegasena(resp.megasena);
       setLotofacil(resp.lotofacil);
     })()
    //apenas em caso de necesssidade (cenario ficticio)
    //setMegasena(dados);
    //setLotofacil(dados);
  }, []);

  return (
    <Contexto.Provider value={{megasena, lotofacil}}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, ContextoProvider };