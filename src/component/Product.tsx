import { use, useEffect, useState } from "react"
import type { ProductType } from "../type/type"

export default function Product() {
    const [products, setProducts] = useState<ProductType[]>([])
    const fetchProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        //  <h2 className="text-center">Products</h2>
        <div>
            <div className="grid md:grid-cols-2 gap-4 p-5">
                {
                    products.map(product => (
                        <div key={product.id} className="border p-4 m-2">
                            <img src={product.image} alt={product.title} className="w-20 h-20 object-contain mb-2" />
                            <h3 className="font-bold">{product.title}</h3>
                            <p className="text-sm">{product.category}</p>
                            <p className="text-lg font-semibold">${product.price}</p>
                            <p className="text-sm">{product.description.slice(0, 50).concat('......')}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
