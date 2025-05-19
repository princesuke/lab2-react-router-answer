import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router"

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then((response)=> {
            console.log(response.data.products)
            setProducts(response.data.products)
        })
        
    },[]);

    return (

        <ul>{products.map((product,index) => (
             <li key={index}>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
        ))}</ul>
    )
}