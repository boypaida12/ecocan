import ConsumerContent from "@/components/contents/consumer/consumer-content";
import EcoStationContent from "@/components/contents/eco-station/eco-station-content";
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
    "ECOsumer": {
      hero: <DefaultHero/>,
      content: <ConsumerContent/>,
    },
    "ECO-station": {
      hero: <EcoStationHero/>,
      content: <EcoStationContent/>,
    },
    "ECOurier": {
        hero: <CourierHero/>,
        content: <p>Courier body</p>,
    },
    "ECO-Producer": {
        hero: <ProducerHero/>,
        content: <p>Producer body</p>,
    },
    "ECO-Recycler": {
        hero: <RecyclerHero/>,
        content: <p>Recycler body</p>,
    },
    "ECO-Events": {
        hero: <EventsHero/>,
        content: <p>Events body</p>,
    },  
  };