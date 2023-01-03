import Link from "next/link"
import styles from "../styles/MenuSuperior.module.css"
import React from "react"

export default function MenuSuperior() {

  return (
    <div className={styles.container}>
        <div className={styles.divMenuSuperior}>
        <Link href={"/"} style={{textDecoration: "none"}}>
            <h6>Home</h6>
        </Link>
            <h6>Venda</h6>
            <h6 onClick={() => alert("deu certo")}>Leilao</h6>
            <div style={{width: "70%"}}></div>
            <h6>Matheus.ferreira</h6>
            <div className={styles.divUser}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 50"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/> </g> </svg>     
            </div>
        </div>
    </div>
  )
}