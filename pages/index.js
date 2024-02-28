import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Report from '@/components/Report';
import StandForm from '@/components/StandForm';

export default function Home() {
  const [standData, setStandData] = useState({
    location: "",
    min_customers: 0,
    max_customers: 0,
    avg_cookies: 0,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  function formSubmitHandler(event) {
    event.preventDefault();
    const formData = {
      id: event.target.location.value,
      location: event.target.location.value,
      min_customers: parseFloat(event.target.min_customers.value),
      max_customers: parseFloat(event.target.max_customers.value),
      avg_cookies: parseFloat(event.target.avg_cookies.value),
    };

    setStandData(formData);
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
          <Report {...standData} /> :
          <p className="text-xs text-center text-gray-400">Report table coming soon...</p> // Add styling as needed
        }
      </main>
      <Footer />
    </div>
  );
}





