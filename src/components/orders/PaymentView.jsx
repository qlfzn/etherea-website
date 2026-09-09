
import { useState } from "react"

function PaymentView({ total, onBack, onSubmit }) {
    const [paymentMethod, setPaymentMethod] = useState("")
    const [proofFile, setProofFile] = useState(null)
    const [reference, setReference] = useState("")
    const [errors, setErrors] = useState({})

    function handleSubmit(event) {
        event.preventDefault()

        const nextErrors = {}

        if (!paymentMethod) {
            nextErrors.paymentMethod = "Please choose a payment method."
        }

        if (!proofFile) {
            nextErrors.proofFile = "Please attach your proof of payment."
        }

        setErrors(nextErrors)

        if (Object.keys(nextErrors).length === 0) {
            onSubmit?.({ paymentMethod, proofFile, reference })
        }
    }

    return (
        <main className="mx-auto max-w-3xl px-4 py-6 text-[#2d241b] sm:px-6 sm:py-10">
            <div className="mb-5 flex items-center gap-2 sm:mb-8" aria-label="Order progress">
                {[1, 2, 3].map((step) => (
                    <div key={step} className="h-1 flex-1 rounded-full bg-[#986c2d]" />
                ))}
            </div>

            <p className="text-sm tracking-[0.4em] text-[#806b4d]">STEP 3 OF 3</p>
            <h1 className="mt-2 font-serif text-3xl sm:mt-3 sm:text-4xl">Payment</h1>
            <p className="mt-3 text-base leading-relaxed text-[#6d5b43] sm:text-lg">
                Choose your payment method and attach your proof of payment.
            </p>
            <p className="mt-4 font-serif text-3xl text-[#986c2d]">
                Total amount to pay: RM {total}
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-6 sm:mt-7">
                <fieldset>
                    <legend className="text-base font-medium text-[#2d241b]">Payment method<span className="text-[#986c2d]">*</span></legend>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <label className={`cursor-pointer rounded-xl border p-4 transition-colors ${paymentMethod === "duitnow" ? "border-[#986c2d] bg-[#f7efdf]" : "border-[#d8c39a] bg-[#fffaf0]"}`}>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="duitnow"
                                checked={paymentMethod === "duitnow"}
                                onChange={(event) => {
                                    setPaymentMethod(event.target.value)
                                    setErrors((current) => ({ ...current, paymentMethod: "" }))
                                }}
                                className="h-4 w-4 accent-[#986c2d]"
                            />
                            <span className="ml-2 text-lg font-medium">DuitNow QR</span>
                            <span className="mt-1 block text-sm text-[#6d5b43]">Scan and pay using your banking app.</span>
                        </label>

                        <label className={`cursor-pointer rounded-xl border p-4 transition-colors ${paymentMethod === "bank-transfer" ? "border-[#986c2d] bg-[#f7efdf]" : "border-[#d8c39a] bg-[#fffaf0]"}`}>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="bank-transfer"
                                checked={paymentMethod === "bank-transfer"}
                                onChange={(event) => {
                                    setPaymentMethod(event.target.value)
                                    setErrors((current) => ({ ...current, paymentMethod: "" }))
                                }}
                                className="h-4 w-4 accent-[#986c2d]"
                            />
                            <span className="ml-2 text-lg font-medium">Bank transfer</span>
                            <span className="mt-1 block text-sm text-[#6d5b43]">Transfer directly to our account.</span>
                        </label>
                    </div>
                    {errors.paymentMethod && <p className="mt-2 text-sm text-red-700">{errors.paymentMethod}</p>}

                    {paymentMethod === "bank-transfer" && (
                        <div className="mt-3 rounded-xl border border-[#d8c39a] bg-[#f7efdf] p-4 text-sm text-[#6d5b43]">
                            <p className="font-medium text-[#2d241b]">Bank transfer details</p>
                            <p className="mt-2">Bank: Etherea Bank</p>
                            <p>Account name: Etherea Fragrances</p>
                            <p>Account number: XXXX XXXX XXXX</p>
                            <p className="mt-2 text-xs text-[#806b4d]">Replace the placeholder account number before launch.</p>
                        </div>
                    )}
                </fieldset>

                <div>
                    <label htmlFor="proof-file" className="block text-base font-medium text-[#2d241b]">Proof of payment<span className="text-[#986c2d]">*</span></label>
                    <input
                        id="proof-file"
                        name="proofFile"
                        type="file"
                        accept="image/*,.pdf,application/pdf"
                        onChange={(event) => {
                            setProofFile(event.target.files[0] || null)
                            setErrors((current) => ({ ...current, proofFile: "" }))
                        }}
                        className="mt-1.5 block w-full rounded-lg border border-[#987c4d] bg-[#fffaf0] px-3 py-2.5 text-sm text-[#6d5b43] file:mr-3 file:rounded-full file:border-0 file:bg-[#dda947] file:px-3 file:py-2 file:text-sm file:text-[#2d241b]"
                    />
                    <p className="mt-1.5 text-sm text-[#806b4d]">Accepted: screenshot or PDF.</p>
                    {errors.proofFile && <p className="mt-1 text-sm text-red-700">{errors.proofFile}</p>}
                </div>

                <div>
                    <label htmlFor="payment-reference" className="block text-base font-medium text-[#2d241b]">Payment reference <span className="font-normal text-[#806b4d]">(optional)</span></label>
                    <input
                        id="payment-reference"
                        name="reference"
                        type="text"
                        value={reference}
                        onChange={(event) => setReference(event.target.value)}
                        placeholder="e.g. transfer reference number"
                        className="mt-1.5 w-full rounded-lg border border-[#987c4d] bg-[#fffaf0] px-3 py-2.5 text-base text-[#2d241b] outline-none placeholder:text-[#806b4d] focus:border-[#986c2d]"
                    />
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-[#d8c39a] pt-4">
                    <button type="button" onClick={onBack} className="min-h-11 text-base text-[#6d5b43]">← Back</button>
                    <button type="submit" className="min-h-11 rounded-lg bg-[#efc978] px-5 py-2.5 text-base text-[#2d241b] transition-colors hover:bg-[#e5b95d] sm:px-7 sm:py-3 sm:text-lg">
                        Submit order
                    </button>
                </div>
            </form>
        </main>
    )
}

export default PaymentView;