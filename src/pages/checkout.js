import React, { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { Disclosure } from "@headlessui/react"
import { LockClosedIcon } from "@heroicons/react/solid"
import { navigate } from "gatsby-link"

const subtotal = "$108.00"
const discount = { code: "CHEAPSKATE", amount: "$16.00" }
const taxes = "$9.92"
const shipping = "$8.00"
const total = "$141.92"

const products = [
  {
    id: 1,
    name: "Mountain Mist Artwork Tee",
    href: "#",
    price: "$36.00",
    color: "Birch",
    size: "L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg",
    imageAlt:
      "Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.",
  },
  // More products...
]

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  // The items the customer wants to buy
  var purchase = {
    items: [{ id: "xl-tshirt" }],
  }
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("http://localhost:4242/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setClientSecret(data.clientSecret)
      })
  }, [])
  // we will edit this
  const handleSubmit = async event => {
    console.log("SUBMIT HANDLINGGGG")
    console.log(event)
    console.log(stripe)
    event.preventDefault()

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    console.log(payload)
    navigate("/success")
  }

  return (
    <form onSubmit={handleSubmit}>
      <form className="mt-6"></form>
      <div className="grid grid-cols-12 gap-y-6 gap-x-4">
        <div className="col-span-full">
          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email-address"
              name="email-address"
              autoComplete="email"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="name-on-card"
            className="block text-sm font-medium text-gray-700"
          >
            Name on card
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="name-on-card"
              name="name-on-card"
              autoComplete="cc-name"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full">
          <CardElement />
        </div>

        <div className="col-span-full">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="street-address"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="city"
              name="city"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-4">
          <label
            htmlFor="province"
            className="block text-sm font-medium text-gray-700"
          >
            Province
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="province"
              name="province"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-full sm:col-span-4">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium text-gray-700"
          >
            Postal code
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="postal-code"
              name="postal-code"
              autoComplete="postal-code"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex space-x-2">
        <div className="flex items-center h-5">
          <input
            id="same-as-shipping"
            name="same-as-shipping"
            type="checkbox"
            defaultChecked
            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <label
          htmlFor="same-as-shipping"
          className="text-sm font-medium text-gray-900"
        >
          Billing address is the same as shipping address
        </label>
      </div>

      <button
        type="submit"
        disabled={!stripe}
        className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Pay {total}
      </button>

      <p className="flex justify-center text-sm font-medium text-gray-500 mt-6">
        <LockClosedIcon
          className="w-5 h-5 text-gray-400 mr-1.5"
          aria-hidden="true"
        />
        Payment details stored in plain text
      </p>
    </form>
  )
}

const stripePromise = loadStripe("pk_test_3Ga7SzO2rJlU1aPheHQSlMrV00A02xtXac")

const CheckoutPage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
)

export default CheckoutPage
