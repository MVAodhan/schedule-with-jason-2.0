import Nav from '@components/Nav';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const tabs = [
  { header: 'Sanity Details', id: 'sanity' },
  { header: 'Calendar Details', id: 'calendar' },
  { header: 'Youtube Details', id: 'youtube' },
  { header: 'Twitter Details', id: 'twitter' },
];

export async function getServerSideProps() {
  const res = await fetch(
    'https://www.learnwithjason.dev/api/v2/schedule'
  ).then((res) => res.json());

  return {
    props: {
      episodes: res,
    },
  };
}

const Publish = ({ episodes }: { episodes: any }) => {
  const [activeTab, setActiveTab] = useState<string>('sanity');

  const router = useRouter();
  const { date } = router.query;
  const episode = episodes.filter((episode: any) => episode.date === date);

  const renderTab = () => {
    switch (activeTab) {
      case 'calendar':
        console.log('calendar');
        break;
      case 'youtube':
        console.log('youtube');
        break;
      case 'twitter':
        console.log('twitter');
        break;
      default:
        console.log(`sanity`);
    }
  };

  return (
    <>
      <Head>
        <title>Publish Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen  flex flex-col items-center">
        <Nav />
        <section className="h-full w-5/12 ">
          <div className="tabs tabs-boxed justify-center bg-[#FFFFFF]">
            <>
              {tabs.map((tab, i) => (
                <a
                  key={i}
                  className={`tab ${tab.id === activeTab ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.header}
                </a>
              ))}
              {renderTab()}
            </>
          </div>
        </section>
      </main>
    </>
  );
};

export default Publish;
