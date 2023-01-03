import { useState } from 'react';
import styles from '../styles/BoxCadastro.module.css'
import InputMask from 'react-input-mask'

export default function BoxCadastro(props: any) {

const [raca, setRaca] = useState("");
const [nome, setNome] = useState("");
const [nascimento, setNascimento] = useState("");
const [preco, setPreco] = useState("");
const [cidade, setCidade] = useState("");
const [uf, setUf] = useState("");
const [peso, setPeso] = useState("");

const [isLoading, setIsLoading] = useState(false);

const BoxCadastro = () => {
  if(!isLoading){
  return (
    <div className={styles.boxCadastro}>
        <div className={styles.content}>
  

        <input style={{width: "100%"}} className={nome? styles.inputCadastroOn : styles.inputCadastroOff} placeholder="Nome do animal" value={nome} onChange={(e) => setNome(e.target.value)}/>
        
        <input style={{width: "40%"}} className={raca? styles.inputCadastroOn : styles.inputCadastroOff} placeholder="Raça do animal" value={raca} onChange={(e) => setRaca(e.target.value)}/>
        <input style={{width: "5%", opacity: "0", cursor: "default"}} />
        <input style={{width: "30%"}} className={cidade? styles.inputCadastroOn : styles.inputCadastroOff} placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
        <input style={{width: "2%", opacity: "0", cursor: "default"}} />
        <input style={{width: "10%"}} className={uf? styles.inputCadastroOn : styles.inputCadastroOff} placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)}/>
        
        <InputMask style={{width: "40%"}} className={preco? styles.inputCadastroOn : styles.inputCadastroOff} placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} mask="R$ 9999.99" maskChar={null} />
     

        <input style={{width: "5%", opacity: "0", cursor: "default"}} />

        <InputMask style={{width: "25%"}} className={peso? styles.inputCadastroOn : styles.inputCadastroOff} placeholder="Peso (em kg)" value={peso} onChange={(e) => setPeso(e.target.value)} mask="9999 kg" />

       
        <div style={{width: "30%"}}>
          <label>Data de nascimento</label>
          <input type="date" style={{width: "100%", paddingRight: "10px"}} className={nascimento? styles.inputCadastroOn : styles.inputCadastroOff} placeholder="Data de nascimento" value={nascimento} onChange={(e) => setNascimento(e.target.value)}/>
        </div>
        
         <button className={styles.button} onClick={() => {setIsLoading(true); CarregarDb()}} >Salvar</button>
        </div>
      </div>
    )
  }

  else return (
    <div className={styles.boxCadastro}>
        <div className={styles.content}>
          <div className={styles.load}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
          </div>
        </div>
    </div>
  )

}
  async function CarregarDb() {
    
    var object = {
      nome: nome,
      raca: raca,
      nascimento: nascimento,
      preco: preco.split("R$ ")[1],
      peso: peso.split(" kg")[0],
      cidade: cidade,
      uf: uf,
    }

 
    const rawResponse = await fetch('http://localhost:3000/produto/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object)
  }).then((response) => {
    alert("Gado inserido com sucesso!")
    location.reload()
  });
 

    console.log(peso.split(" kg"))
  }

  return (
    <div className={styles.container}>
      {BoxCadastro()}
    </div> 
  )
}