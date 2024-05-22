import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}