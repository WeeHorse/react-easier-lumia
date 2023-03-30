import { useStates, useAutoKeys } from 'react-easier'

export default function Products(){
    useAutoKeys()
    const products = useStates('products')

    const add = (e, product) => { 
        console.log('would add', product)
    }

    return (
        products.map((product) => 
            <div className="product">
              <div className="content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button onClick={(e)=>add(e, product)}>Köp för <span>{product.price}</span> kr</button>
              </div>
              <img src={product.image}/>
            </div>     
          )
    )
}
