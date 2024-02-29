import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReportTable from '@/components/ReportTable';
import CreateForm from '@/components/CreateForm';
import { hours } from '@/data';

export default function CookieStandAdmin() {
  // const [standData, setStandData] = useState({
  //   location: "",
  //   min_customers: 0,
  //   max_customers: 0,
  //   avg_cookies: 0,
  // });
  const [standReports, setStandReports] = useState([]);
  // const [formSubmitted, setFormSubmitted] = useState(false);

  function handleCreate(standInfo) {
    setStandReports([...standReports, standInfo]); // take existing reports and append on standInfo from current submission
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <CreateForm onCreate={handleCreate} />
        <ReportTable reports={standReports} hours={hours} />
      </main>
      <Footer />
    </div>
  );
}
