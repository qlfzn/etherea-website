import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductView from "../components/orders/ProductView";
import OrderSummaryView from "../components/orders/OrderSummaryView";
import PaymentView from "../components/orders/PaymentView";

function Order() {
    const [currentStep, setCurrentStep] = useState(1)
    const [orderItems, setOrderItems] = useState([])
    const orderTotal = orderItems.reduce((total, item) => total + item.price * item.quantity, 0) + 8

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }, [currentStep])

    // function to control step - forward and backward
    function renderStep() {
        switch (currentStep) {
            case 1:
                return <ProductView onNext={(items) => { setOrderItems(items); setCurrentStep(2) }}/>
            case 2:
                return (
                    <OrderSummaryView
                        items={orderItems}
                        onNext={() => setCurrentStep(3)}
                        onBack={() => setCurrentStep(1)}
                    />
                )
            case 3:
                return <PaymentView total={orderTotal} onBack={() => setCurrentStep(2)}/>
        }
    }

    return (
        <>
        <div>
            <Header />
            <section id="order-section">{renderStep()}</section>
        </div>
        </>
    )
}

export default Order;