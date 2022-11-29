import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import BoxResultado from "../../components/BoxResultado";
import MenuLateral from "../../components/MenuLateral";
import styles from '../../styles/Filtro.module.css'

export default function Pesquisa() {
  
  const router = useRouter()
  const [respostaDb, setResposta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const rota: any = JSON.stringify(router.query.filtro)
  let objFiltrado: any = {}
  let resultadoPesquisa: any = {}

  useEffect(() => {
    const url = 'http://localhost:3000/produto/' + router.query.filtro
    fetch(url)
    .then((response) => response.json())
    .then((data) => {setResposta(data); console.log("DATA -> " + data)});
    
  }, []);



  if(typeof(rota) == "string"){
    const filtro = rota.split('"').join('').split("&")
    
    for(let i=0; i<filtro.length; i++){
      let obj = filtro[i].split(":")
      objFiltrado[obj[0]] = obj[1] 
    }
  }

  
  resultadoPesquisa = respostaDb.filter(elem => elem.raca.match(objFiltrado.raca))

  console.log(JSON.stringify(objFiltrado))

  const ConteudoFiltrado = () => {
    return (
      <div>
        {resultadoPesquisa.map(elem => (
            <BoxResultado raca={elem.raca}></BoxResultado>
        ))}
    
    </div>
    )
    
  }

  return (
    <div className={styles.container}>

      <div className={styles.menuLateral}>
        <MenuLateral></MenuLateral>
      </div>

      <div className={styles.content}>
        {ConteudoFiltrado()}
      </div>
      
   
    </div>
    // resultadoPesquisa.map((elem, index) => 
    // <div className={styles.container}>

    //   <div className={styles.menuLateral}>
    //     <MenuLateral></MenuLateral>
    //   </div>

    //   <div className={styles.content}>

    //   </div>
      
    //   {/* <BoxResultado raca={elem.raca}></BoxResultado> */}
    //   {/* <h1>{elem.boiId}</h1>
    //   <h1>{elem.raca}</h1>
    //   <h1>{elem.cidade}/{elem.uf}</h1> */}
    // </div>
    // )
    )
}