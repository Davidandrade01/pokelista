import Image from "next/image"
import styles from '../../styles/Pokemon.module.css'

const api="https://pokeapi.co/api/v2/pokemon/"


export async function getStaticProps(context){
    
    const {params}=context
    const data= await fetch (`${api}${params.pokemonId}`)
    const pokemon=await data.json()
return{

    props:{pokemon}
}
}   

export async function getStaticPaths(){
    const Maxlist=200
    
    const res=await fetch(`${api}/?limit=${Maxlist}`)
    const data=await res.json()
  
  //busca da identificação através de results, já que não há id
  const paths= data.results.map((item,index)=>{
    
    return {
        params:{pokemonId:(index+1).toString()}
  }
  
   
})
return{ paths,fallback:false}
}

export default function Pokedetail({pokemon}){
    return(
        <div className={styles.pokemon_container}>
            <h1 className={styles.pokemon_title}>{pokemon.name} </h1>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
        width='200'
        height='200'
        alt={pokemon.name}
                />
        <div>
            <h3>Number:</h3>
           <p>#{pokemon.id}</p>
        </div>

        <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}