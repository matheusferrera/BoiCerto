import styles from '../styles/BarraPesquisa.module.css'
import { useState} from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Link from 'next/link';

export default function BarraPesquisa() {

    const [filtroPesquisa, setFiltro] = useState("");
    const [pesquisaRaca, setPesquisa] = useState("raca");
    
    function realizarPesquisa (){
        console.log(filtroPesquisa);
    }

  return (
    <div className={styles.container}>
      <div className={styles.boxPesquisa}>
        <div className={styles.divOpcoes}>
              {/* <p className={pesquisaRaca? styles.pesquisaSelecionada : styles.pesquisaNaoSelecionada}>Pesquisar por raça</p> */}
              <p className={pesquisaRaca == "raca"? styles.pesquisaSelecionada : styles.pesquisaNaoSelecionada} onClick={(e) => setPesquisa("raca")}>Pesquisar por raça</p>
              <p className={pesquisaRaca == "local"? styles.pesquisaSelecionada : styles.pesquisaNaoSelecionada} onClick={(e) => setPesquisa("local")}>Pesquisar por local</p>
        </div>
        <div className={styles.divInput}>
          <div className={styles.inputPesquisa}>
                <BiSearchAlt2 style={{color: "grey"}} />
                <input placeholder="Pesquise por uma raça de gado ou uma cidade" value={filtroPesquisa} onChange={(e) => setFiltro(e.target.value)}/>
          </div>
          <Link href={pesquisaRaca == "raca" ? "pesquisa/&raca:"+filtroPesquisa+"&loc:&valmin:&valmax:" : "pesquisa/&raca:&loc:"+filtroPesquisa+"&valmin:&valmax:"} className={styles.buttonPesquisa}>
                Ver ofertas!
            </Link>
          </div>
      </div>
    </div>
  )
}