import ConsumerContent from "@/components/consumer-content";
import EcoStationContent from "@/components/eco-station-content";
import CourierHero from "@/components/shared/heros/courier-hero";
import DefaultHero from "@/components/shared/heros/default-hero";
import EcoStationHero from "@/components/shared/heros/eco-station-hero";
import EventsHero from "@/components/shared/heros/events-hero";
import ProducerHero from "@/components/shared/heros/producer-hero";

export interface TabContent {
    hero: React.ReactNode;
    content: React.ReactNode;
  }
  
  export const tabContent: Record<string, TabContent> = {
    "consumer": {
      hero: <DefaultHero/>,
      content: <ConsumerContent/>,
    },
    "eco-station": {
      hero: <EcoStationHero/>,
      content: <EcoStationContent/>,
    },
    "courier": {
        hero: <CourierHero/>,
        content: <p>Courier body</p>,
    },
    "producer": {
        hero: <ProducerHero/>,
        content: <p>Producer body</p>,
    },
    "recycler": {
        hero: <DefaultHero/>,
        content: <p>Recycler body</p>,
    },
    "events": {
        hero: <EventsHero/>,
        content: <p>Events body</p>,
    },  
  };