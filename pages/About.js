import Image from 'next/image'
import styles from '../styles/About.module.css'
export default function About(){
    return(
        <>
            <div className={styles.about}>
                <h1>About This project</h1>
               <Image src='/images/charizard.png' height='300' width='300' alt='Charizard' />
               <p>Este projeto foi elaborado como estudo...</p>
            </div>
            
        </>
    )

}