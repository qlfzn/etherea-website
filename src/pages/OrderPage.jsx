import { useState } from "react";
import Header from "../components/Header";
import ProductView from "../components/orders/ProductView";
import OrderSummaryView from "../components/orders/OrderSummaryView";
import PaymentView from "../components/orders/PaymentView";

function Order() {
    const [currentStep, setCurrentStep] = useState(1)
    const [orderItems, setOrderItems] = useState([])

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
                return <PaymentView onBack={() => setCurrentStep(2)}/>
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