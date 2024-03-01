import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReportTable from '@/components/ReportTable';
import CreateForm from '@/components/CreateForm';
import { hours } from '@/data';
import useResource from '../hooks/useResource';

export default function CookieStandAdmin() {
  
  const [standReports, setStandReports] = useState([]);
  const { resources, deleteResource } = useResource();

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
        <ReportTable stands={resources || []} deleteStand={deleteResource} />
      </main>
      <Footer locationsCount={resources?.length ?? 0}/>
    </div>
  );
}
