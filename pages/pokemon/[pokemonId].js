import Image from "next/image"
import styles from '../../styles/pokemon.module.css'
import { useRouter } from "next/router"

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
return{ paths,fallback:true}
}

export default function Pokedetail({pokemon}){
// inicialmente será feita uma checagem se o fallback está true. A ideia é ele permitir
// um carregamento de resultados não pré-renderizados. Ou seja além dos 200 id´s definidos
  const router=useRouter()   
  if(router.isFallback){    
    return <h3>loading...</h3>
  }


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