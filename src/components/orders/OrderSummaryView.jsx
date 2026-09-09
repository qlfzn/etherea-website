
import { useState } from "react"
import DeliveryDetails from "./DeliveryDetails"
import OrderSummary from "./SummaryCard"

function OrderSummaryView({ items, onNext, onBack }) {
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0) + (items.length > 0 ? 8 : 0)

    function handleDeliverySubmit(event) {
        event.preventDefault()
        setIsConfirmationOpen(true)
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

            {isConfirmationOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2d241b]/60 px-4 py-6" role="presentation">
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="confirm-order-heading"
                        className="w-full max-w-md rounded-2xl border border-[#d8c39a] bg-[#f7efdf] p-5 text-[#2d241b] shadow-2xl sm:p-6"
                    >
                        <h2 id="confirm-order-heading" className="font-serif text-2xl">Confirm your order</h2>
                        <p className="mt-2 text-[#6d5b43]">Please check these items before continuing to payment.</p>

                        <div className="mt-5 space-y-3 border-y border-[#d8c39a] py-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex justify-between gap-4 text-base">
                                    <span>{item.name} × {item.quantity}</span>
                                    <span className="whitespace-nowrap">RM {item.price * item.quantity}</span>
                                </div>
                            ))}
                            <div className="flex justify-between gap-4 pt-2 font-medium">
                                <span>Total</span>
                                <span className="font-serif text-2xl text-[#986c2d]">RM {total}</span>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setIsConfirmationOpen(false)}
                                className="min-h-11 rounded-lg border border-[#987c4d] px-4 py-2 text-[#6d5b43]"
                            >
                                Go back
                            </button>
                            <button
                                type="button"
                                onClick={onNext}
                                className="min-h-11 rounded-lg bg-[#efc978] px-4 py-2 text-[#2d241b]"
                            >
                                Confirm and pay
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </main>
    )
}

export default OrderSummaryView;