import Hero from "@/components/hero";
import OurWork from "./components/OurWork";
import Blog from "@/components/blog";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero/>
        <OurWork />
        <Blog/>
      </main>
    </>
  );
}
