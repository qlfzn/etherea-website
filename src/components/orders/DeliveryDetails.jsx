import { useRef, useState } from "react"

function DeliveryDetails({ onSubmit }) {
    const formRef = useRef(null)
    const [errors, setErrors] = useState({})

    function handleSubmit(event) {
        event.preventDefault()

        const form = formRef.current
        const nextErrors = {}

        Array.from(form.elements).forEach((field) => {
            if (!field.name || !field.required) return

            if (field.validity.valueMissing) {
                nextErrors[field.name] = "This field is required."
            } else if (field.validity.typeMismatch) {
                nextErrors[field.name] = "Please enter a valid email address."
            }
        })

        setErrors(nextErrors)

        if (Object.keys(nextErrors).length === 0) {
            onSubmit(event)
        }
    }

    function clearError(event) {
        const fieldName = event.target.name
        if (!errors[fieldName]) return

        setErrors((currentErrors) => {
            const nextErrors = { ...currentErrors }
            delete nextErrors[fieldName]
            return nextErrors
        })
    }

    return (
        <section aria-labelledby="delivery-details-heading" className="mt-6 rounded-2xl border border-[#d8c39a] bg-[#f7efdf] p-4 sm:mt-7 sm:p-6">
            <h2 id="delivery-details-heading" className="font-serif text-2xl text-[#2d241b]">Delivery details</h2>
            <p className="mt-2 text-base leading-relaxed text-[#6d5b43]">
                Where should we send it? These details are used for tracking and delivery only.
            </p>

            <form id="delivery-details-form" ref={formRef} noValidate onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                    <label htmlFor="full-name" className="block text-base font-medium text-[#2d241b]">Full name<span className="text-[#986c2d]">*</span></label>
                    <input id="full-name" name="fullName" type="text" required onInput={clearError} placeholder="e.g. Ahmad bin Ali" className="mt-1.5 w-full rounded-lg border border-[#987c4d] bg-[#fffaf0] px-3 py-2.5 text-base text-[#2d241b] outline-none placeholder:text-[#806b4d] focus:border-[#986c2d]" />
                    {errors.fullName && <p className="mt-1 text-sm text-red-700">{errors.fullName}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-base font-medium text-[#2d241b]">Email address<span className="text-[#986c2d]">*</span></label>
                    <input id="email" name="email" type="email" required onInput={clearError} placeholder="e.g. a.ali@example.com" className="mt-1.5 w-full rounded-lg border border-[#987c4d] bg-[#fffaf0] px-3 py-2.5 text-base text-[#2d241b] outline-none placeholder:text-[#806b4d] focus:border-[#986c2d]" />
                    {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-base font-medium text-[#2d241b]">Phone number<span className="text-[#986c2d]">*</span></label>
                    <input id="phone" name="phone" type="tel" required onInput={clearError} placeholder="e.g. 012-345 6789" className="mt-1.5 w-full rounded-lg border border-[#987c4d] bg-[#fffaf0] px-3 py-2.5 text-base text-[#2d241b] outline-none placeholder:text-[#806b4d] focus:border-[#986c2d]" />
                    {errors.phone && <p className="mt-1 text-sm text-red-700">{errors.phone}</p>}
                </div>

                <div>
                    <label htmlFor="address" className="block text-base font-medium text-[#2d241b]">Delivery address<span className="text-[#986c2d]">*</span></label>
                    <textarea id="address" name="address" required rows="3" onInput={clearError} placeholder="Full address, including postcode and state" className="mt-1.5 w-full resize-y rounded-lg border border-[#987c4d] bg-[#fffaf0] px-3 py-2.5 text-base text-[#2d241b] outline-none placeholder:text-[#806b4d] focus:border-[#986c2d]" />
                    {errors.address && <p className="mt-1 text-sm text-red-700">{errors.address}</p>}
                </div>
            </form>
        </section>
    )
}

export default DeliveryDetails
