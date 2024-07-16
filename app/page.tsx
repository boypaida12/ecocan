import NavigationBar from "@/components/shared/navbar/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import OurWork from "./components/OurWork";

export default function Home() {
  return (
    <>
    <nav>
      <NavigationBar/>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OurWork/>
    </main>
    </>
  );
}
