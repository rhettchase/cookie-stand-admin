import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState("add location..")
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <StandForm />
        <Report />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='p-4 text-2xl text-black bg-green-400'>
      <h1>Cookie Stand Admin</h1>
    </header>
  );
}

function StandForm() {
  return (
    <form className="w-full max-w-lg p-2 mx-auto my-4 text-sm bg-green-300">
      <div className="flex flex-wrap items-center mb-6 -mx-3">
        <label className="w-1/4 px-3 text-xs text-center text-black" htmlFor="location">
          Location
        </label>
        <div className="w-3/4 px-3">
          <input type="text" className="w-full" id="location" />
        </div>
      </div>
      <div className="flex items-center mb-6 -mx-3">
        <div className="flex-1 px-3">
          <div className="mb-6">
            <label className="block mb-2 text-xs text-center text-black" htmlFor="min_customers">
              Minimum Customers per Hour
            </label>
            <input type="number" className="w-full" id="min_customers" step="0.01" />
          </div>
        </div>
        <div className="flex-1 px-3">
          <div className="mb-6">
            <label className="block mb-2 text-xs text-center text-black" htmlFor="max_customers">
              Maximum Customers per Hour
            </label>
            <input type="number" className="w-full" id="max_customers" step="0.01" />
          </div>
        </div>
        <div className="flex-1 px-3">
          <div className="mb-6">
            <label className="block mb-2 text-xs text-center text-black" htmlFor="avg_cookies">
              Average Cookies per Sale
            </label>
            <input type="number" className="w-full" id="avg_cookies" step="0.01" />
          </div>
        </div>
        <div className="px-3">
          <button className="h-full px-4 py-2 font-bold text-black bg-green-600 rounded">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}



function Report() {
  return <></>;
}

function Footer() {
  return (
    <footer className='p-4 mt-8 text-xs text-gray-700 bg-green-400'>
      <p>&copy;{new Date().getFullYear()}</p>
    </footer>
  );
}
