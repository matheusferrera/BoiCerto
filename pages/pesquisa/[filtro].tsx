import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import BoxPadrao from "../../components/BoxPadrao";
import MenuLateral from "../../components/MenuLateral";
import MenuSuperior from "../../components/MenuSuperior";
import styles from '../../styles/Filtro.module.css'

export default function Pesquisa() {
  
  const router = useRouter()
  const [respostaDb, setRespostaDb] = useState([]);
  const [filtroAberto, setFiltroAberto] = useState([false]);
  const [isLoading, setIsLoading] = useState(true);

  

  const rota: any = JSON.stringify(router.query.filtro)
  let rotaFlag: any = ""
  let objFiltrado: any = {}
  let filtro: any = ""
  let resultadoPesquisa: any = {}

  const url = router.query.filtro

  

  useEffect(() => {
  console.log("entrou no effect -> " + JSON.stringify(objFiltrado))
  setIsLoading(true)
  const fetchRota = async () => {
    
    const response = await fetch(`http://localhost:3000/produto/${url}`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objFiltrado)
    })


    let result = await response.json().then((response => {
      if(response != ""){
        setIsLoading(false)
        setRespostaDb(response)
      }
      
      
    }));

    return 1
  }
  fetchRota()
  }, [rota]);


  if(typeof(rota) == "string"){
    filtro = rota.split('"').join('').split("&")
    for(let i=0; i<filtro.length; i++){
      let obj = filtro[i].split(":")
      if(obj[1] != "")
      objFiltrado[obj[0]] = obj[1] 
    }
    
  }

  const ConteudoFiltrado = () => {
    
    if(isLoading){
    return (
      <div className={styles.load}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
    </div>
    )
    }

    if(respostaDb[0] != null){
      return (
        respostaDb.map(elem => (
            <BoxPadrao key={elem._id} width={"22%"} height={"min-content"}
            nome={elem.nome} raca={elem.raca}  peso={elem.peso + "Kg"}
            nascimento ={elem.nascimento} preco={"R$ " + elem.preco}
            cidade={elem.cidade} uf={elem.uf}>
            </BoxPadrao>
        ))
    )
    }

    
    
  }
  
  return (
    <div className={styles.page}>
      <MenuSuperior></MenuSuperior>
      <MenuLateral ></MenuLateral>
      <div className={styles.container}>
     
        <div className={styles.content}>
          {ConteudoFiltrado()}
        </div>
        
    
      </div>
    </div>
    )
}