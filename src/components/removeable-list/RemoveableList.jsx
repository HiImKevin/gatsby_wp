import React, { useState } from "react"
import { CheckIcon, ClockIcon } from "@heroicons/react/solid"

const initialList = [
  {
    id: "a",
    firstname: "Robin",
    lastname: "Wieruch",
    year: 1988,
  },
  {
    id: "b",
    firstname: "Dave",
    lastname: "Davidds",
    year: 1990,
  },
]

const RemoveableList = () => {
  const [list, setList] = useState(initialList)

  function handleRemove(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return (
    <ul
      role="list"
      className="border-t border-b border-gray-200 divide-y divide-gray-200"
    >
      {list.map(product => (
        <li key={product.id} className="flex py-6">
          <div className="flex-shrink-0">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
            />
          </div>

          <div className="ml-4 flex-1 flex flex-col sm:ml-6">
            <div>
              <div className="flex justify-between">
                <h4 className="text-sm">
                  <a
                    href={product.href}
                    className="font-medium text-gray-700 hover:text-gray-800"
                  >
                    {product.name}
                  </a>
                </h4>
                <p className="ml-4 text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm text-gray-500">{product.size}</p>
            </div>

            <div className="mt-4 flex-1 flex items-end justify-between">
              <p className="flex items-center text-sm text-gray-700 space-x-2">
                {product.inStock ? (
                  <CheckIcon
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ClockIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    aria-hidden="true"
                  />
                )}

                <span>
                  {product.inStock
                    ? "In stock"
                    : `Will ship in ${product.leadTime}`}
                </span>
              </p>
              <div className="ml-4">
                <button
                  type="button"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => handleRemove(product.id)}
                >
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default RemoveableList
