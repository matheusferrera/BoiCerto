
import styles from '../../styles/Cadastro.module.css'
import BoxCadastro from "../../components/BoxCadastro"
import MenuSuperior from '../../components/MenuSuperior'

export default function venda() {
  return (
    <div className={styles.container}>
      <MenuSuperior></MenuSuperior>
      <BoxCadastro></BoxCadastro>
    </div>
  )
}
