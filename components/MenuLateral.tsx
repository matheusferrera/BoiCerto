import Link from 'next/link';
import { useState } from 'react';
import { FiMapPin } from 'react-icons/fi'
import { MdAttachMoney } from 'react-icons/md'
import styles from '../styles/MenuLateral.module.css'

export default function BoxResultado(props: any) {

    const [racaPesquisa, setRaca] = useState("");
    const [localPesquisa, setLocal] = useState("");
    const [precoMinPesquisa, setPrecoMin] = useState("");
    const [precoMaxPesquisa, setPrecoMax] = useState("");
    

  return (
    <div className={styles.container}>
        <div className={styles.divPesquisa}>
            <a>Nome da raça</a>
            <div className={styles.inputPesquisa} style={{width: "80%"}}>
                    <FiMapPin style={{color: "grey"}} />
                    <input placeholder="Pesquisar por raça" value={racaPesquisa} onChange={(e) => setRaca(e.target.value)}/>
            </div>
        </div>
        <div className={styles.divPesquisa}>
            <a>Localização</a>
            <div className={styles.inputPesquisa} style={{width: "80%"}}>
                    <FiMapPin style={{color: "grey"}} />
                    <input placeholder="Pesquisar por cidade" value={localPesquisa} onChange={(e) => setLocal(e.target.value)}/>
            </div>
        </div>
        <div className={styles.divPesquisa}>
            <a>Preço</a>
            <div className={styles.row}>
                <div className={styles.inputPesquisa} style={{width: "30%"}}>
                        <MdAttachMoney style={{color: "grey"}} />
                        <input placeholder="Preço min" value={precoMinPesquisa} onChange={(e) => setPrecoMin(e.target.value)}/>
                </div>
                <div style={{width: "15%"}}></div>
                <div className={styles.inputPesquisa} style={{width: "30%"}}>
                        <MdAttachMoney style={{color: "grey"}} />
                        <input placeholder="Preço max" value={precoMaxPesquisa} onChange={(e) => setPrecoMax(e.target.value)}/>
                </div>
            </div>
        </div>
            
        <div className={styles.row} style={{justifyContent: 'center'}}>
        <Link href={"&raca:" + racaPesquisa + "&loc:" + localPesquisa + "&valmin:" + precoMinPesquisa + "&valmax:" + precoMaxPesquisa} className={styles.buttonPesquisa}>
            adicionar filtro!
        </Link>
        </div>
    </div>
  )
}