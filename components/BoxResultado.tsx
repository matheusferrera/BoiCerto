import styles from '../styles/BoxResultado.module.css'

export default function BoxResultado(props: any) {

  return (
    <div className={styles.container}>
      <div className={styles.boxResultado}>
        <h1>{props.raca}</h1>
      </div>
    </div>
  )
}