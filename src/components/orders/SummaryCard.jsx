function OrderSummary({ items }) {
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
    const deliveryFee = items.length > 0 ? 8 : 0
    const total = subtotal + deliveryFee

    return (
        <section aria-labelledby="order-summary-heading" className="mt-6 rounded-2xl border border-[#d8c39a] bg-[#f7efdf] p-4 sm:mt-7 sm:p-6">
            <p className="text-sm tracking-[0.35em] text-[#806b4d]">YOUR ORDER</p>
            <h2 id="order-summary-heading" className="sr-only">Order summary</h2>

            <div className="mt-4 space-y-4">
                {items.map((item) => (
                    <div key={item.id} className="flex items-start justify-between gap-3 border-b border-[#d8c39a] pb-4">
                        <div>
                            <h3 className="text-lg font-medium text-[#2d241b]">{item.name}</h3>
                            <p className="mt-1 text-[#6d5b43]">{item.size} · Eau de Parfum · x{item.quantity}</p>
                        </div>
                        <p className="whitespace-nowrap font-serif text-xl text-[#2d241b]">RM {item.price * item.quantity}</p>
                    </div>
                ))}
            </div>

            <dl className="mt-4 space-y-2 text-base text-[#6d5b43]">
                <div className="flex justify-between gap-4">
                    <dt>Subtotal</dt>
                    <dd>RM {subtotal}</dd>
                </div>
                <div className="flex justify-between gap-4">
                    <dt>Delivery</dt>
                    <dd>RM {deliveryFee}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-[#d8c39a] pt-4 text-[#2d241b]">
                    <dt className="text-lg font-medium">Total</dt>
                    <dd className="font-serif text-3xl text-[#986c2d]">RM {total}</dd>
                </div>
            </dl>
        </section>
    )
}

export default OrderSummary
