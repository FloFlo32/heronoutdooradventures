import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { Highlights } from "@/components/sections/highlights";
import { SocialBand } from "@/components/sections/social-band";
import { AskGuide } from "@/components/sections/ask-guide";
import { Map } from "@/components/sections/map";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Highlights />
        <SocialBand />
        <AskGuide />
        <Map />
      </main>
      <Footer />
    </>
  );
}
