import {useStates, useAutoKeys} from 'react-easier'

export default function Products(props) {
    useAutoKeys()
    const products = useStates('products')
    const cart = useStates('cart')

    const add = (e, product) => {
        cart.items.push(product)
        cart.total = cart.total + product.price
        console.log(`Product added: ${product.name} \nProduct price: ${product.price} \nNew total: ${cart.total}`)
    }

    const filteredProducts = () => {
        return products.filter(p => p.name.toLowerCase().includes(props.search.toLowerCase()) || p.description.toLowerCase().includes(props.search.toLowerCase()))
    }

    return (
        filteredProducts().map((product) =>
            <div className="product">
                <div className="content">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <button onClick={(e) => add(e, product)}>Köp för <span>{product.price}</span> kr</button>
                </div>
                <img src={product.image}/>
            </div>
        )
    )
}
