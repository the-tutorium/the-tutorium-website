import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Team from '../components/Team';
import Courses from '../components/Courses';
import Mission from '../components/Mission';
import Action from '../components/Action';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mathverse Tutoring</title>
        <meta content="Example" name="Math tutoring" />
        <meta property="og:url" content="mathversetutoring.org" />
        <meta property="og:description" content="Math tutoring" />
        <meta property="og:title" content="Math tutoring" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full leading-normal text-gray-600">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.jpeg')",
            zIndex: -1,
          }}
        />
        <Header />
        <Landing />
        <Mission />
        <Courses />
        <Team />
        <Action />
        <Footer />
      </div>
    </>
  );
};

export default Home;
