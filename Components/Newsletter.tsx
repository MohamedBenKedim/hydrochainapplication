'use client'

export default function Newsletter() {
    return (
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md">
      <h1 className='text-center text-xl md:text-2xl font-bold text-purple'>
      Join our community 
      </h1>
      <br />
      <p> Receive exclusive updates by signing up for our newsletter.</p>

      <form className="mt-6">
      <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
        {/* <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full rounded-full border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 
            ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            // className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 
            // ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div> */}
      </form>
    </div>

  </div>
)
}