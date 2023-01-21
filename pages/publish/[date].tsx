import Nav from '@components/Nav';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { EpisodeApi, Episode } from '@types';

import Calendar from 'components/page-components/publish/calendar';
import Sanity from 'components/page-components/publish/sanity';
import Youtube from 'components/page-components/publish/youtube';
import Twitter from 'components/page-components/publish/twitter';
import { getUTCDate } from '@utils';
const tabs = [
  { header: 'Sanity Details', id: 'sanity' },
  { header: 'Calendar Details', id: 'calendar' },
  { header: 'Youtube Details', id: 'youtube' },
  { header: 'Twitter Details', id: 'twitter' },
];

const Publish = ({ episodes }: { episodes: EpisodeApi[] }) => {
  const [activeTab, setActiveTab] = useState<string>('sanity');

  const router = useRouter();
  let { date } = router.query;

  const utcDate = getUTCDate(date as string, 'America/Los_Angeles');

  const episode = episodes.filter((episode) => episode.date === utcDate);
  console.log('episode from data page', episode);

  const renderTab = () => {
    switch (activeTab) {
      case 'calendar':
        return <Calendar episode={episode[0]} />;
        break;
      case 'youtube':
        return <Youtube episode={episode[0]} />;
        break;
      case 'twitter':
        return <Twitter episode={episode[0]} />;
        break;
      default:
        return <Sanity episode={episode[0]} />;
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
        <section className="w-full md:w-10/12 flex flex-col items-center ">
          <div className="tabs tabs-boxed  justify-center bg-[#FFFFFF]">
            <div>
              {tabs.map((tab, i) => (
                <a
                  key={i}
                  className={`tab ${tab.id === activeTab ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.header}
                </a>
              ))}
            </div>
          </div>
          {renderTab()}
        </section>
      </main>
    </>
  );
};

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

export default Publish;
