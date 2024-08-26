import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Recommendations from "@/components/Recommendations";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="relative flex flex-col justify-center items-center  overflow-hidden 
    mx-auto sm:px-10 px-5 bg-black-100"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Recommendations />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
