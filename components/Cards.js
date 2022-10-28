import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Cards.module.css'
export default function Cards({pokemon}){
return(
    <div className={styles.cards}>
    <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
        width='120'
        height='120'
        alt={pokemon.name}
    />
        <p className={styles.cards_id}>#{pokemon.id}</p>
        <h3 className={styles.cards_title}>{pokemon.name}</h3>
        <Link className={styles.cards_btn} href={`pokemon/${pokemon.id}`}>Details</Link>

        
    </div>
)
}