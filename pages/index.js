// next
import Head from "next/head";
// context
import { ProfileContext } from "@/profileContext";
import { useContext, useEffect } from "react";
// components
import Hero from "../components/Hero";
import OutreachForm from "@/components/Form";
import Writing from "@/components/Writing";

const HomePage = () => {
  const profileContext = useContext(ProfileContext);
  const { content } = profileContext;

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const hostname = window.location.hostname;

  //     if (hostname === "reklaw.io" || hostname === "www.reklaw.io") {
  //       setMode();
  //       setPfp();
  //     }
  //   }
  // }, [])

  return (
    <div className="container">
      <Head>
        <title>reklaw</title>
      </Head>
      <Hero />
      <div className="spacer"></div>
      <h2 style={{ marginBottom: "1rem" }}>Ask me a question</h2>
      <OutreachForm />
      <div className="spacer"></div>
      {content.name === "reklaw" && <Writing />}
    </div>
  )
}

export default HomePage;