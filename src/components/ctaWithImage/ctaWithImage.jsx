import * as React from "react"
import { ExternalLinkIcon } from "@heroicons/react/solid"
import { Link } from "gatsby"

const CtaWithImage = props => {
  console.log(props)
  return (
    <div className="relative flex flex-col-reverse bg-primaryDarker">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            {props.headingText} {"fjpfj oasfopsofpa spf oasjofpasojf psa pp"}
          </h2>
          <p className="mt-3 text-lg text-gray-300">{props.paragraphText}</p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                to={props.buttonSlug}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                {props.buttonText}
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaWithImage
