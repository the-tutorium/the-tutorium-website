import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Landing from "../components/Landing";
import Team from "../components/Team";
import Courses from "../components/Courses";
import Mission from "../components/Mission";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>The Tutorium</title>
				<meta content="Example" name="Math & Programming tutoring at The Tutorium" />
				<meta property="og:url" content="thetutorium.netlify.app" />
				<meta property="og:description" content="Math & Programming tutoring at The Tutorium" />
				<meta property="og:title" content="Math & Programming tutoring at The Tutorium" />
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<div className="h-full leading-normal text-gray-600">
				<div
					className="absolute top-0 left-0 right-0 bottom-0 brightness-120 bg-no-repeat bg-cover shadow-lg -bottom-full filter md:bottom-0 brightness-100"
					style={{
						backgroundImage: "url('splash.jpeg')",
						zIndex: -1,
					}}
				/>
				<Header />
				<Landing />
				<Mission />
				<Courses />
				<Team />
				<ContactUs />
				<Footer />
			</div>
		</>
	);
};

export default Home;
