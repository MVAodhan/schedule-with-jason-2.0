import Head from 'next/head';

import Nav from '@components/Nav';
import { episodesAtom } from 'stores';
import { useAtom } from 'jotai';
import Card from '@components/Card';

// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [episodes, setEpisodes] = useAtom(episodesAtom);

  return (
    <>
      <Head>
        <title>Schedule with Jason 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex flex-col items-center">
        <Nav />
        <div className="w-full h-full ">
          <div className="w-4/5 h-full mx-auto pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {episodes.map((ep) => (
                <Card key={ep.id} episode={ep} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}