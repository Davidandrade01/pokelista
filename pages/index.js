
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Cards from '../components/Cards'


export async function getStaticProps(){

  const Maxlist=200
  const api="https://pokeapi.co/api/v2/pokemon/"
  const res=await fetch(`${api}/?limit=${Maxlist}`)
  const data=await res.json()

//busca da identificação através de results, já que não há id
data.results.forEach((item,index)=>{
  item.id=index+1
})

  return{
    props:{pokemonList:data.results}
  }
}

export default function Home({pokemonList}) {
  console.log(pokemonList)
  return (
    <>
    <div className={styles.title_container}>
    <Image src='/images/pokeball.png' width='50'  height='50' alt='pokeball' />
      <h1 className={styles.title} >Poke<span className={styles.title_span}>Lib</span></h1>
    </div>
    <div className={styles.pokemon_container}>
      
        {pokemonList.map((pokemon)=><Cards key={pokemon.id} pokemon={pokemon}/>)}
      
    </div>
    
    </>
  )
}
