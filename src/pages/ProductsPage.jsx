import { useEffect, useState } from "react"
import { getProducts } from "../api"
import { toast } from "sonner"
import { Link } from "react-router-dom"

export default function ProductsPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then((prods) => {
            setProducts(prods);
        })
        .catch((error) => {
            toast.error("Error al obtener los productos")
            console.error("[getProducts error]", error)
        })
    },[])

    return (
        <main>
           <section>
            {
                products.map((product, idx) => {
                    return(
                        <article key={`prod-${product.id}`}>
                            <img src={product.thumbnail} alt={product.title} />
                            <p>{product.title}</p>
                            <Link to={`/productos/${product.id}`} />
                        </article>
                    )
                })
            }
            </section> 
        </main>
    )
}