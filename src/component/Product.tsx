import { useEffect, useState } from "react"
import type { ProductType } from "../type/type"
import axios from "axios"

export default function Product() {
    const [products, setProducts] = useState<ProductType[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productPerPage] = useState(6)
    const fetchProducts = async () => {
        try {
            const res = await axios.get<ProductType[]>("https://fakestoreapi.com/products")
            setProducts(res.data)
        } catch (error) {
            console.error(error)
        }
    }
    // const fetchProducts = async () => {
    //     const res = await fetch("https://fakestoreapi.com/products")
    //     const data = await res.json()
    //     setProducts(data)
    // }

    useEffect(() => {
        fetchProducts()
    }, [])
    //pagination
    const indexOfLastProduct = currentPage * productPerPage //5
    const indexOfFirstProduct = indexOfLastProduct - productPerPage //0
    const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(products.length / productPerPage)

    return (
        //  <h2 className="text-center">Products</h2>
        <div>
            <div className="grid md:grid-cols-2 gap-4 p-5">
                {
                    currentProduct.map(product => (
                        <div key={product.id} className="border p-4 m-2">
                            <a href={`/products/${product.id}`}>
                                <img src={product.image} alt={product.title} className="w-20 h-20 object-contain mb-2" />
                                <h3 className="font-bold">{product.title}</h3>
                            </a>
                            <p className="text-sm">{product.category}</p>
                            <p className="text-lg font-semibold">${product.price}</p>
                            <p className="text-sm">{product.description.slice(0, 50).concat('......')}</p>
                        </div>
                    ))
                }
            </div>
            {/* pagination */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-t mt-4">
                <div className="text-sm text-gray-700">
                    Showing {products.length ? indexOfFirstProduct + 1 : 0} - {Math.min(indexOfLastProduct, products.length)} of {products.length}
                </div>

                <nav className="inline-flex items-center space-x-1" aria-label="Pagination">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-md border text-sm font-medium ${currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                            : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                            }`}
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 rounded-md border text-sm font-medium ${page === currentPage
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                                }`}
                            aria-current={page === currentPage ? "page" : undefined}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className={`px-3 py-1 rounded-md border text-sm font-medium ${currentPage === totalPages || totalPages === 0
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                            : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                            }`}
                    >
                        Next
                    </button>
                </nav>
            </div>
        </div>

    )
}
