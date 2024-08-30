import ConsumerContent from "@/components/contents/consumer/consumer-content";
import CourierContent from "@/components/contents/courier/courier-content";
import ProducerContent from "@/components/contents/eco-producer/producer-content";
import EcoStationContent from "@/components/contents/eco-station/eco-station-content";
import RecyclerContent from "@/components/contents/recycler/recycler-content";
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
    "ECOnsumer": {
      hero: <DefaultHero/>,
      content: <ConsumerContent/>,
    },
    "ECO-station": {
      hero: <EcoStationHero/>,
      content: <EcoStationContent/>,
    },
    "ECOurier": {
        hero: <CourierHero/>,
        content: <CourierContent/>,
    },
    "ECO-Producer": {
        hero: <ProducerHero/>,
        content: <ProducerContent/>,
    },
    "ECO-Recycler": {
        hero: <RecyclerHero/>,
        content: <RecyclerContent/>,
    },
    "ECO-Events": {
        hero: <EventsHero/>,
        content: <p>Events body</p>,
    },  
  };