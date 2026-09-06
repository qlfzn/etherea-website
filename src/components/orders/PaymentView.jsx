
function PaymentView({ onBack }) {

    return (
        <>
        <section id="product-view" className="flex flex-col justify-center">
            <h2 className="mt-5">
                Payment View
            </h2>
            <button onClick={onBack}>Back</button>
            <button >
                Submit Order
            </button>
        </section>
        </>
    )
}

export default PaymentView;