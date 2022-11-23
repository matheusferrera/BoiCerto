import { useRouter } from "next/router"
import { useState } from "react";
import BoxResultado from "../../components/BoxResultado";

export default function Pesquisa() {
  
  const router = useRouter()
  const [respostaPesquisa, setResposta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = 'http://localhost:3000/produto/' + router.query.filtro
  fetch(url)
  .then((response) => response.json())
  .then((data) => {setResposta(data); setIsLoading(false)});


 
  console.log("PESQUISA ->" + respostaPesquisa);

  if(isLoading){
    return (
      <h1>LOADING!</h1>
      )
  }

  return (
    respostaPesquisa.map((elem, index) => 
    <div style={{border: "solid 1px black"}}>
      
      <BoxResultado raca={elem.raca}></BoxResultado>
      {/* <h1>{elem.boiId}</h1>
      <h1>{elem.raca}</h1>
      <h1>{elem.cidade}/{elem.uf}</h1> */}
    </div>
    ))
}