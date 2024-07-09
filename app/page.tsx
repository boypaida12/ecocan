import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Ecocan</Button>
      <Image src="/assets/images/google-play.png" width={230.4} height={34} alt="download"/>
      <Image src="/assets/images/apple-store.png" width={230.4} height={34} alt="download"/>
      <Image src="/assets/images/ecocan-app.svg" width={491} height={676} alt="download"/>
      <Image src="/assets/images/ecocan-logo.svg" width={46} height={46} alt="download"/>
    </main>
  );
}
