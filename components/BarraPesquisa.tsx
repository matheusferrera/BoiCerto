import styles from '../styles/BarraPesquisa.module.css'
import { useState} from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Link from 'next/link';

export default function BarraPesquisa() {

    const [filtroPesquisa, setFiltro] = useState("");
    
    function realizarPesquisa (){
        console.log(filtroPesquisa);
    }

  return (
    <div className={styles.container}>
      <div className={styles.boxPesquisa}>
      <div className={styles.inputPesquisa}>
            <BiSearchAlt2 style={{color: "grey"}} />
            <input placeholder="Pesquise por uma raça de gado ou uma cidade" value={filtroPesquisa} onChange={(e) => setFiltro(e.target.value)}/>
        </div>
        <Link href={"pesquisa/"+filtroPesquisa} className={styles.buttonPesquisa}>
            Ver ofertas!
        </Link>
      </div>
    </div>
  )
}