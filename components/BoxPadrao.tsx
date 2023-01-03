import styles from '../styles/BoxPadrao.module.css'
import Image from 'next/image';
import fotoBoi from "../images/image34.png";

export default function BoxResultado(props: any) {

 
  const date = new Date(props.nascimento)
  const idade = getAge(date).age + " anos e " + getAge(date).month + " meses";
  
  function getAge(dateString: Date) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const response = {
      age: age,
      month: month
    }
    
    return response;
}

  return (
      <div className={styles.divBox} style={{width: props.width, height: props.height}}>
        <Image
          src={fotoBoi}
          alt="Picture of the author"
          layout="responsive"
        />
        <h4>{props.nome}</h4>
        <h5>{props.raca}</h5>
        <h5>{props.peso}</h5>
        <h6>{idade}</h6>
        <div className={styles.divPreco}>
          <h4>{props.preco}</h4>
          <button  style={{display: props.leilao ? "block" : "none"}} className={styles.botao}>Dar lance</button>
        </div>
        <div className={styles.divCidade}>
          <h6>{props.cidade}-{props.uf}</h6>
        </div>
      </div>
  )
}