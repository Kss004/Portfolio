import Header from "./components/site/Header";
import Spotlight from "./components/site/Spotlight";
import {
  Intro,
  Projects,
  Experience,
  Stack,
  Education,
  Contact,
  SiteFooter,
} from "./components/site/Sections";

export default function Home() {
  return (
    <div id="top" className="grain min-h-screen overflow-x-clip bg-background text-foreground">
      <Spotlight />
      <Header />
      <main className="relative z-[1] mx-auto max-w-3xl px-5">
        <Intro />
        <Projects />
        <Experience />
        <Stack />
        <Education />
        <Contact />
        <SiteFooter />
      </main>
    </div>
  );
}
