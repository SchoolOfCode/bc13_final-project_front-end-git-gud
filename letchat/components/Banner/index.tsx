import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Banner() {
  return (
    <div id="banner" className="bg-light-primary text-white">
      <div className="mx-auto max-w-7xl py-3 px-3 text-white sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between text-white">
          <div className="flex w-0 flex-1 items-center text-white">
            <span className="flex rounded-lg bg-indigo-700 p-2 text-white">
              <MegaphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="text-white md:hidden">Welcome!</span>
              <span className="hidden text-white md:inline">
                Welcome to Demo Day! You can log in with [EMAIL] and [PASSWORD]
                for demo purposes.
              </span>
            </p>
          </div>
          {/* <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div> */}
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
