import ConsumerContent from "@/components/consumer-content";
import DefaultHero from "@/components/shared/hero-content/default-hero";
import HeroContent from "@/components/shared/hero-content/hero-content";

export interface TabContent {
    hero: React.ReactNode;
    content: React.ReactNode;
  }
  
  export const tabContent: Record<string, TabContent> = {
    "consumer": {
      hero: <HeroContent/>,
      content: <ConsumerContent/>,
    },
    "eco-station": {
      hero: <p>Eco-Station hero</p>,
      content: <p>Eco-Station body</p>,
    },
    "courier": {
        hero: <p>Courier hero</p>,
        content: <p>Courier body</p>,
    },
    "producer": {
        hero: <p>Producer hero</p>,
        content: <p>Producer body</p>,
    },
    "recycler": {
        hero: <p>Recycler hero</p>,
        content: <p>Recycler body</p>,
    },
    "events": {
        hero: <p>Events hero</p>,
        content: <p>Events body</p>,
    },  
  };