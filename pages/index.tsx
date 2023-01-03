import Head from 'next/head'
import Image from 'next/image'
import BarraPesquisa from '../components/BarraPesquisa'
import styles from '../styles/PageHome.module.css'
import BoxPadrao from "../components/BoxPadrao"
import MenuSuperior from '../components/MenuSuperior'


export default function Home() {
  return (
    <div className={styles.container}>

      <MenuSuperior></MenuSuperior>
      
      <div className={styles.section}>
        <BarraPesquisa></BarraPesquisa>
      </div>
      
      <h3>Leilão ao vivo</h3>
      <div className={styles.sectionLeilao}>
        
        <BoxPadrao width={"22%"} height={"min-content"} leilao="true"
            nome="zequinha" raca="nelore"  peso={"120Kg"}
            nascimento ="1995" preco="R$1500"
            cidade="Brasilia" uf="DF">
        </BoxPadrao>
        <BoxPadrao width={"22%"} height={"min-content"} leilao="true"
            nome="zequinha" raca="nelore"  peso={"120Kg"}
            nascimento ="1995" preco="R$1500"
            cidade="Brasilia" uf="DF">
        </BoxPadrao>
        <BoxPadrao width={"22%"} height={"min-content"} leilao="true"
            nome="zequinha" raca="nelore"  peso={"120Kg"}
            nascimento ="1995" preco="R$1500"
            cidade="Brasilia" uf="DF">
        </BoxPadrao>
      </div>
      <h1>Mais coisa</h1>
    </div>
  )
}
