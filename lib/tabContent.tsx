import ConsumerContent from "@/components/contents/consumer/consumer-content";
import CourierContent from "@/components/contents/courier/courier-content";
import EcoStationContent from "@/components/contents/eco-station-content";
import CourierHero from "@/components/shared/heros/courier-hero";
import DefaultHero from "@/components/shared/heros/default-hero";
import EcoStationHero from "@/components/shared/heros/eco-station-hero";
import EventsHero from "@/components/shared/heros/events-hero";
import ProducerHero from "@/components/shared/heros/producer-hero";
import RecyclerHero from "@/components/shared/heros/recycler-hero";

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
        content: <CourierContent/>,
    },
    "producer": {
        hero: <ProducerHero/>,
        content: <p>Producer body</p>,
    },
    "recycler": {
        hero: <RecyclerHero/>,
        content: <p>Recycler body</p>,
    },
    "events": {
        hero: <EventsHero/>,
        content: <p>Events body</p>,
    },  
  };