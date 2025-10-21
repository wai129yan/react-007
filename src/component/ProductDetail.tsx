import { useParams } from 'react-router';
import { useEffect, useState } from "react"
import type { ProductType } from "../type/type"
import { Heart, ShoppingCart, Star, Truck, RotateCcw, Shield } from "lucide-react";

const imgArray = [
    "//picsum.photos/300/200",
    "//picsum.photos/300/201",
    "//picsum.photos/300/202",
    "//picsum.photos/300/203",
];
const colorArray = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
    { id: 3, name: "blue" },
    { id: 4, name: "gray" },
    { id: 5, name: "skyblue" },
]

const sizeArray = ["S", "M", "L", "XL", "XXL"]

export default function ProductDetail() {
    const [count, setCount] = useState(0)
    type OrderItem = {
        product: string;
        color: string;
        size: string;
        quantity: number;
    };
    const [orderItem, setOrderItem] = useState<OrderItem[]>([])
    console.log(orderItem)
    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedSize, setSelectedSize] = useState("M")
    const [selectedColor, setSelectedColor] = useState("black")
    const [quantity, setQuantity] = useState(1)
    const [isFavorite, setIsFavorite] = useState(false)


    const { productid } = useParams() //destructuring
    const [product, setProduct] = useState<ProductType>({} as ProductType);
    console.log('productid :>>', product)

    const fetchProductDetail = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${productid}`);
        const data = await res.json();
        setProduct(data);
    }
    useEffect(() => {
        fetchProductDetail()
    }, [productid])


    const handleAddToCart = () => {
        // console.log("[v0] Adding to cart:", {
        //     product: product.title,
        //     color: selectedColor,
        //     size: selectedSize,
        //     quantity,
        // })
        // alert("Added to cart!")
        const newItems: OrderItem = {
            product: product.title || "",
            color: selectedColor,
            size: selectedSize,
            quantity,
        }
        setOrderItem(prev => {
            const updated = [...prev, newItems];
            setCount(updated.length);
            return updated;
        })
    }


    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">STORE</h1>
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Shop
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Collections
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                About
                            </a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="text-foreground hover:text-muted-foreground transition-colors">
                                <Heart className="w-5 h-5" />
                            </button>
                            <button className="text-foreground flex items-center gap-1 hover:text-muted-foreground transition-colors">
                                <ShoppingCart className="w-5 h-5" />
                                ({count})
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                            <img
                                src={imgArray[selectedImage] || "/placeholder.svg"}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {imgArray.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square bg-secondary rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? "border-foreground" : "border-transparent"
                                        }`}
                                >
                                    <img
                                        src={image || "/placeholder.svg"}
                                        alt={`${product.title} view ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.floor(product?.rating?.rate || 0) ? "fill-foreground text-foreground" : "text-muted-foreground"}`}
                                        />
                                    ))}
                                </div>

                            </div>
                            <h1 className="text-3xl lg:text-4xl font-semibold mb-4 text-balance">{product.title}</h1>

                            {/* <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
                                <span className="text-xl text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                                <span className="text-sm font-medium bg-foreground text-background px-2 py-1 rounded">
                                    {Math.round((1 - product.price / product.price) * 100)}% OFF
                                </span>
                            </div> */}
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                        {/* Color Selection */}
                        <div>
                            <label className="block text-sm font-medium mb-3">
                                Color: <span className="text-muted-foreground capitalize">{selectedColor}</span>
                            </label>
                            <div className="flex gap-3">
                                {colorArray.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name ? "border-foreground scale-110" : "border-border"
                                            }`}
                                        style={{ backgroundColor: color.name }}
                                        aria-label={color.name}
                                    >
                                        {color.name === "white" && <div className="w-full h-full rounded-full border border-border" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <label className="block text-sm font-medium mb-3">
                                Size: <span className="text-muted-foreground">{selectedSize}</span>
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {sizeArray.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-6 py-2 border rounded-lg text-sm font-medium transition-colors ${selectedSize === size
                                            ? "bg-foreground text-background border-foreground"
                                            : "bg-background text-foreground border-border hover:border-foreground"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-medium mb-3">Quantity</label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-border rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 hover:bg-secondary transition-colors"
                                    >
                                        −
                                    </button>
                                    <span className="px-6 py-2 border-x border-border">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-2 hover:bg-secondary transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                                {product?.inStock && <span className="text-sm text-muted-foreground">In stock</span>}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`px-4 py-4 border rounded-lg transition-colors ${isFavorite
                                    ? "bg-foreground text-background border-foreground"
                                    : "border-border hover:border-foreground"
                                    }`}
                            >
                                <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                            <div className="flex items-start gap-3">
                                <Truck className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium">Free Shipping</p>
                                    <p className="text-xs text-muted-foreground">On orders over $100</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <RotateCcw className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium">Easy Returns</p>
                                    <p className="text-xs text-muted-foreground">30-day return policy</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium">Secure Payment</p>
                                    <p className="text-xs text-muted-foreground">100% secure checkout</p>
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="pt-6 border-t border-border">
                            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                            {/* <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
