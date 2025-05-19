import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";


export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((response)=> {
            // console.log(response.data)
            setProduct(response.data)
        })
        .catch(() => {
            // console.error("Error fetching product data:", error);
            // navigate("/404");
            setNotFound(true);
        });
    },[id]);

    if (notFound) {
        return (
            <div>
                <p>Product not found</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        )
    }

    return (
        <div>
            <h2>{product.tile}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <img src={product.thumbnail} width={200} alt={product.tile} />
        </div>
    )
}