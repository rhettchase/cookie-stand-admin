import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState("")
  const [min_customers, setMinCustomers] = useState(0)
  const [max_customers, setMaxCustomers] = useState(0)
  const [avg_cookies, setAvgCookies] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false);

  function formSubmitHandler(event) {
    event.preventDefault();
    const newLocation = event.target.location.value; 
    const newMinCustomers = parseFloat(event.target.min_customers.value);
    const newMaxCustomers = parseFloat(event.target.max_customers.value);
    const newAvgCookies = parseFloat(event.target.avg_cookies.value);

    setLocation(newLocation);
    setMinCustomers(newMinCustomers);
    setMaxCustomers(newMaxCustomers);
    setAvgCookies(newAvgCookies);
    setFormSubmitted(true);

    event.target.reset();
};

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <StandForm onSubmit={formSubmitHandler}/>
        {
          formSubmitted ?
          <Report location={location} min_customers={min_customers} max_customers={max_customers} avg_cookies={avg_cookies} /> :
          <p className="text-xs text-center text-gray-400">Report table coming soon...</p> // Add styling as needed
        }
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

function StandForm( { onSubmit } ) {
  return (
    <form onSubmit={ onSubmit } className="w-full max-w-lg p-2 mx-auto my-4 text-sm bg-green-300 rounded-lg">
      <div className="flex flex-wrap items-center mb-6 -mx-3">
        <label className="w-1/4 px-3 text-xs text-center text-black" htmlFor="location">
          Location
        </label>
        <div className="w-3/4 px-3">
          <input type="text" className="w-full" name="location" />
        </div>
      </div>
      <div className="flex items-center mb-6 -mx-3">
        <div className="flex-1 px-3">
          <div className="mb-6">
            <label className="block mb-2 text-xs text-center text-black" htmlFor="min_customers">
              Minimum Customers per Hour
            </label>
            <input type="number" className="w-full" name="min_customers" />
          </div>
        </div>
        <div className="flex-1 px-3">
          <div className="mb-6">
            <label className="block mb-2 text-xs text-center text-black" htmlFor="max_customers">
              Maximum Customers per Hour
            </label>
            <input type="number" className="w-full" name="max_customers" />
          </div>
        </div>
        <div className="flex-1 px-3">
          <div className="mb-6">
            <label className="block mb-2 text-xs text-center text-black" htmlFor="avg_cookies">
              Average Cookies per Sale
            </label>
            <input type="number" className="w-full" name="avg_cookies" />
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



function Report({ location, min_customers, max_customers, avg_cookies }) {
  const lastCreated = JSON.stringify({
    location,
    min_customers,
    max_customers,
    avg_cookies,
  }, null, 2); // Pretty print the JSON string

  return (
    <pre>{lastCreated}</pre> // Use <pre> for formatted display
  );
}

function Footer() {
  return (
    <footer className='p-4 mt-8 text-xs text-gray-700 bg-green-400'>
      <p>&copy;{new Date().getFullYear()}</p>
    </footer>
  );
}
