
function ProductView({ onNext }) {

    return (
        <>
        <section id="product-view" className="flex flex-col justify-center">
            <h2 className="mt-5">
                View Products
            </h2>
            <button onClick={onNext}>
                Next
            </button>
        </section>
        </>
    )
}

export default ProductView;