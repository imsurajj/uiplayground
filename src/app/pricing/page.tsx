'use client';

export default function PricingPage() {
  return (
    <div className="relative isolate bg-gradient-to-b from-black to-black px-6 py-18 sm:py-32 lg:px-8">
   <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
     <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-green-500 to-black opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
   </div>
   <div className="mx-auto max-w-4xl text-center">
     <h2 className="text-base font-semibold text-green-600">Pricing</h2>
     <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">Choose the right plan for you</p>
   </div>
   <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-300 sm:text-xl">Choose an affordable plan that&rsquo;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
   <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
     <div className="relative rounded-3xl bg-white p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none transition-opacity duration-500 opacity-0 animate-fade-in">
       <span className="absolute top-4 right-4 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full transition duration-300 hover:bg-green-600">Popular</span>
       <h3 id="tier-hobby" className="text-base font-semibold text-green-600">Hobby</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-gray-900">$29</span>
            <span className="text-base text-gray-500">/month</span>
          </p>
          <p className="mt-6 text-black">The perfect plan if you are just getting started with our product.</p>
          <ul role="list" className="mt-8 space-y-3 text-sm text-black sm:mt-10">
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              25 products
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Up to 10,000 subscribers
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Advanced analytics
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              24-hour support response time
            </li>
          </ul>
          <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-green-600 ring-1 ring-inset ring-green-200 hover:ring-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:mt-10">Get started today</a>
        </div>
        <div className="relative rounded-3xl bg-emarled p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10 transition-opacity duration-500 opacity-0 animate-fade-in">
          <h3 id="tier-enterprise" className="text-base font-semibold text-green-400">Enterprise</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-white">$99</span>
            <span className="text-base text-gray-400">/month</span>
          </p>
          <p className="mt-6 text-base text-gray-300">Dedicated support and infrastructure for your company.</p>
          <ul role="list" className="mt-8 space-y-3 text-sm text-gray-300 sm:mt-10">
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Unlimited products
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Unlimited subscribers
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Advanced analytics
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Dedicated support representative
            </li>
          </ul>
          <a href="#" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 sm:mt-10">Get started today</a>
        </div>
      </div>
    </div>
  );
}