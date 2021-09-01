import * as React from "react"
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const collections = [
  {
    name: "Women's",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  {
    name: "Men's",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Desk Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
    imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
]
const trendingProducts = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  // More products...
]
const perks = [
  {
    name: 'Free returns',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Store = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
  
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
  
                {/* Links */}
  
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                </div>
  
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {/* Currency selector */}
                  <form>
                    <div className="inline-block">
                      <label htmlFor="mobile-currency" className="sr-only">
                        Currency
                      </label>
                      <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                        <select
                          id="mobile-currency"
                          name="currency"
                          className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                        >
                          {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                          ))}
                        </select>
                        <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                          <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M6 8l4 4 4-4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
  
    
        <main>
          {/* Hero section */}
          <div className="relative">
            {/* Background image and overlap */}
            <div aria-hidden="true" className="hidden absolute inset-0 sm:flex sm:flex-col">
              <div className="flex-1 relative w-full bg-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-50" />
              </div>
              <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
            </div>
  
            <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
              {/* Background image and overlap */}
              <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
                <div className="flex-1 relative w-full bg-gray-800">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gray-900 opacity-50" />
                </div>
                <div className="w-full bg-white h-48" />
              </div>
              <div className="relative py-32">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Mid-Season Sale
                </h1>
                <div className="mt-4 sm:mt-6">
                  <a
                    href="#"
                    className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
  
            <section aria-labelledby="collection-heading" className="-mt-96 relative sm:mt-0">
              <h2 id="collection-heading" className="sr-only">
                Collections
              </h2>
              <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
                {collections.map((collection) => (
                  <div
                    key={collection.name}
                    className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
                  >
                    <div>
                      <div aria-hidden="true" className="absolute inset-0 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                          <img
                            src={collection.imageSrc}
                            alt={collection.imageAlt}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                      </div>
                      <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                        <div>
                          <p aria-hidden="true" className="text-sm text-white">
                            Shop the collection
                          </p>
                          <h3 className="mt-1 font-semibold text-white">
                            <a href={collection.href}>
                              <span className="absolute inset-0" />
                              {collection.name}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
  
          <section aria-labelledby="trending-heading">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:pt-32 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                <h2 id="favorites-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                  Trending Products
                </h2>
                <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                  Shop the collection<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
  
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                {trendingProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="w-full h-56 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      <a href={product.href}>
                        <span className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                ))}
              </div>
  
              <div className="mt-8 text-sm md:hidden">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Shop the collection<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </section>
  
          <section aria-labelledby="perks-heading" className="bg-gray-50 border-t border-gray-200">
            <h2 id="perks-heading" className="sr-only">
              Our perks
            </h2>
  
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
                {perks.map((perk) => (
                  <div
                    key={perk.name}
                    className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                  >
                    <div className="md:flex-shrink-0">
                      <div className="flow-root">
                        <img className="-my-1 h-24 w-auto mx-auto" src={perk.imageUrl} alt="" />
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                      <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">{perk.name}</h3>
                      <p className="mt-3 text-sm text-gray-500">{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    )

}

export default Store;