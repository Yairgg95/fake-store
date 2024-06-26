import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PorductDetailPage() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        
    }, [id])

    return (
        <main>
            <p>Product Detail Page: {id} </p>
        </main>
    )
}