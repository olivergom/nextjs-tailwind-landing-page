
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavigationBar/NavBar";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutMe from "../components/About/AboutMe";
import InfoLogistics from "../components/Info/InfoLogistics";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Ana Prado Home Daycare</title>
        <meta
          name="description"
          content="Ana Prado Home Daycare - 40+ years of experience in childcare"
        />
      </Head>
      <NavBar />
      <main className="flex-grow">
        <Hero heading="Ana Prado Home Daycare" message="Nurturing young minds since 1980" />
        <InfoLogistics />
        <Testimonials />
        <AboutMe />
    
        <Contact />
      </main>
    </div>
  );
};

export default Home;
