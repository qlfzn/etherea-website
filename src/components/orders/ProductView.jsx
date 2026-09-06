
import { useState } from "react"
import ProductCard from "../ProductCard"

const products = [
    {
        id: "femme",
        name: "Etherea Femme",
        notes: "Floral, soft and luminous.",
        price: 189,
    },
    {
        id: "homme",
        name: "Etherea Homme",
        notes: "Woods, amber and a whisper of smoke.",
        price: 189,
    },
]

function ProductView({ onNext }) {
    const [cart, setCart] = useState({})

    function addToCart(product) {
        setCart((currentCart) => ({
            ...currentCart,
            [product.id]: 1,
        }))
    }

    function updateQuantity(productId, change) {
        setCart((currentCart) => {
            const nextQuantity = (currentCart[productId] || 0) + change

            if (nextQuantity < 1) {
                const nextCart = { ...currentCart }
                delete nextCart[productId]
                return nextCart
            }

            return { ...currentCart, [productId]: nextQuantity }
        })
    }

    const cartItems = products.filter((product) => cart[product.id])
    const totalBottles = cartItems.reduce((total, product) => total + cart[product.id], 0)
    const totalPrice = cartItems.reduce((total, product) => total + product.price * cart[product.id], 0)

    return (
        <section id="product-view" className="mx-auto flex max-w-6xl flex-col px-4 py-8 text-[#2d241b] sm:px-6 sm:py-12">
            <div className="mb-6 flex items-center gap-2 sm:mb-10" aria-label="Order progress">
                {[1, 2, 3].map((step) => (
                    <div key={step} className={`h-1 flex-1 rounded-full ${step === 1 ? "bg-[#986c2d]" : "bg-[#d8c39a]"}`} />
                ))}
            </div>
            <p className="text-sm tracking-[0.4em] text-[#986c2d]">STEP 1 OF 3</p>
            <h2 className="mt-3 font-serif text-4xl sm:mt-4 sm:text-5xl">Choose your fragrance</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#6d5b43] sm:mt-5 sm:text-xl">
                Two parfums, 100ml each. Take one or both and discover each scent by its notes.
            </p>

            <div className="mt-6 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        quantity={cart[product.id] || 0}
                        isInCart={Boolean(cart[product.id])}
                        onAddToCart={() => addToCart(product)}
                        onIncrement={() => updateQuantity(product.id, 1)}
                        onDecrement={() => updateQuantity(product.id, -1)}
                    />
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-[#d8c39a] pt-5 sm:mt-8 sm:gap-5 sm:pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-lg text-[#6d5b43] sm:text-xl">
                    {totalBottles} {totalBottles === 1 ? "bottle" : "bottles"} <span className="mx-2">·</span> RM {totalPrice}
                </p>
                <button
                    type="button"
                    onClick={onNext}
                    disabled={totalBottles === 0}
                    className="rounded-lg bg-[#efc978] px-8 py-4 text-lg text-[#2d241b] transition-colors hover:bg-[#e5b95d] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Continue to details
                </button>
            </div>
        </section>
    )
}

export default ProductView;