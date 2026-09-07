
import DeliveryDetails from "./DeliveryDetails"
import OrderSummary from "./SummaryCard"

function OrderSummaryView({ items, onNext, onBack }) {

    function handleDeliverySubmit(event) {
        event.preventDefault()
        onNext()
    }

    return (
        <main className="mx-auto max-w-3xl px-4 py-6 text-[#2d241b] sm:px-6 sm:py-10">
            <div className="mb-5 flex items-center gap-2 sm:mb-8" aria-label="Order progress">
                {[1, 2, 3].map((step) => (
                    <div key={step} className={`h-1 flex-1 rounded-full ${step <= 2 ? "bg-[#986c2d]" : "bg-[#d8c39a]"}`} />
                ))}
            </div>
            <p className="text-sm tracking-[0.4em] text-[#806b4d]">STEP 2 OF 3</p>
            <h1 className="mt-2 font-serif text-3xl sm:mt-3 sm:text-4xl">Order summary</h1>
            <p className="mt-3 text-base leading-relaxed text-[#6d5b43] sm:text-lg">
                Review your order, then add the details needed for delivery.
            </p>

            <OrderSummary items={items} />
            <DeliveryDetails onSubmit={handleDeliverySubmit} />

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#d8c39a] pt-4 sm:mt-6 sm:pt-5">
                <button type="button" onClick={onBack} className="min-h-11 text-base text-[#6d5b43]">← Back</button>
                <button type="submit" form="delivery-details-form" className="min-h-11 rounded-lg bg-[#efc978] px-5 py-2.5 text-base text-[#2d241b] transition-colors hover:bg-[#e5b95d] sm:px-7 sm:py-3 sm:text-lg">
                    Continue to payment
                </button>
            </div>
        </main>
    )
}

export default OrderSummaryView;