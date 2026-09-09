import perfumeImage from "../assets/etherea_perfume.jpeg"

function ProductCard({ product, quantity, isInCart, onAddToCart, onIncrement, onDecrement, limitMessage }) {
    return (
        <article className="flex flex-col rounded-2xl bg-[#f7efdf] p-4 shadow-[0_0_30px_rgba(187,145,75,0.1)] sm:rounded-3xl sm:p-6">
            <div className="aspect-4/3 overflow-hidden rounded-xl bg-[#eee4cf] sm:rounded-2xl">
                <img
                    src={perfumeImage}
                    alt={`${product.name} perfume bottle`}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="mt-4 flex items-start justify-between gap-3 sm:mt-5 sm:gap-4">
                <div>
                    <h3 className="font-serif text-2xl text-[#2d241b] sm:text-3xl">{product.name}</h3>
                    <p className="mt-1 text-sm text-[#6d5b43] sm:mt-2 sm:text-base">{product.notes}</p>
                </div>
                <p className="whitespace-nowrap text-base font-medium text-[#6d5b43] sm:text-lg">
                    RM {product.price}
                </p>
            </div>

            {isInCart ? (
                <>
                    <div className="mt-4 flex items-center justify-between rounded-full border border-[#cdb887] px-4 py-2.5 text-base text-[#6d5b43] sm:mt-6 sm:px-5 sm:py-3 sm:text-lg">
                        <span>In your order</span>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button type="button" onClick={onDecrement} aria-label={`Remove one ${product.name}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#987c4d]">
                                -
                            </button>
                            <span className="min-w-4 text-center font-serif text-2xl text-[#2d241b]">{quantity}</span>
                            <button type="button" onClick={onIncrement} aria-label={`Add one ${product.name}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dda947] text-xl text-[#2d241b]">
                                +
                            </button>
                        </div>
                    </div>
                    {limitMessage && <p className="mt-2 text-sm text-red-700" aria-live="polite">{limitMessage}</p>}
                </>
            ) : (
                <button
                    type="button"
                    onClick={onAddToCart}
                    className="mt-4 rounded-full bg-[#dda947] px-5 py-4 text-base text-[#2d241b] transition-colors hover:bg-[#d29b35] sm:mt-6 sm:text-lg"
                >
                    Add to order
                </button>
            )}
        </article>
    )
}

export default ProductCard
