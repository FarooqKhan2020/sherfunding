import React, { useState } from "react";
import "./Checkout.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Checkout() {
    const [plan, setPlan] = useState("monthly");

    // ✅ Hooks yahan honge
    const stripe = useStripe();
    const elements = useElements();

    // ✅ Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            alert(error.message);
        } else {
            console.log("PaymentMethod:", paymentMethod);
            alert("Card Added Successfully ✅");
        }
    };

    return (
        <section className="checkout-page py-5">
            <div className="container">
                <div className="row g-5">

                    {/* LEFT SIDE */}
                    <div className="col-lg-7">
                        <div className="checkout-card p-4 p-md-5">

                            <h3 className="mb-4">Billing Details</h3>

                            {/* ✅ Form submit */}
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control custom-input" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control custom-input" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Phone Number</label>
                                        <input type="tel" className="form-control custom-input" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Country</label>
                                        <input type="text" className="form-control custom-input" required />
                                    </div>
                                </div>

                                {/* PLAN */}
                                <h4 className="mt-4 mb-3">Select Plan</h4>

                                <div
                                    className={`plan-option ${plan === "one" ? "active" : ""}`}
                                    onClick={() => setPlan("one")}
                                >
                                    <input
                                        type="radio"
                                        name="plan"
                                        checked={plan === "one"}
                                        onChange={() => setPlan("one")}
                                    />
                                    <div>
                                        <h6>Score Improvement Program</h6>
                                        <small>1 × 3 MONTHS</small>
                                    </div>
                                </div>

                                <div
                                    className={`plan-option ${plan === "monthly" ? "active" : ""}`}
                                    onClick={() => setPlan("monthly")}
                                >
                                    <input
                                        type="radio"
                                        name="plan"
                                        checked={plan === "monthly"}
                                        onChange={() => setPlan("monthly")}
                                    />
                                    <div>
                                        <h6>Score Improvement Payment Plan</h6>
                                        <small>$400 / month (3 MONTHS)</small>
                                    </div>
                                </div>

                                {/* STRIPE CARD */}
                                <h4 className="mt-5 mb-3">Payment Details</h4>

                                <div className="mb-3">
                                    <label>Card Details</label>
                                    <div className="stripe-card">
                                        <CardElement
                                            options={{
                                                style: {
                                                    base: {
                                                        fontSize: "16px",
                                                        color: "#333",
                                                        "::placeholder": {
                                                            color: "#aaa",
                                                        },
                                                    },
                                                    invalid: {
                                                        color: "red",
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                </div>



                                <button type="submit" className="btn btn-gradient w-100">
                                    Complete Payment
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-5">
                        <div className="checkout-summary p-4">

                            <h4 className="mb-4">Order Summary</h4>

                            <div className="summary-item">
                                <div>
                                    <h6>Score Improvement Plan</h6>
                                    <small>Qty: 1</small>
                                </div>
                                <span>$400.00</span>
                            </div>

                            <hr />

                            <div className="summary-total">
                                <h5>Order Total</h5>
                                <h5>$400.00</h5>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Checkout;