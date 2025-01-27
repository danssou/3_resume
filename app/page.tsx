import Approch from "@/components/Approch";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjets from "@/components/RecentProjets";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems } />
        <Hero />
        <Grid />
        <RecentProjets /> 
        <Clients />
        <Experience />
        <Approch />
        <Footer />
      </div>

    </main>
  );
}
