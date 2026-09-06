
function OrderSummaryView({ onNext, onBack }) {

    return (
        <>
        <section id="product-view" className="flex flex-col justify-center">
            <h2 className="mt-5">
                Order Summary
            </h2>
            <button onClick={onNext}>
                Next
            </button>
            <button onClick={onBack}>
                Back
            </button>
        </section>
        </>
    )
}

export default OrderSummaryView;