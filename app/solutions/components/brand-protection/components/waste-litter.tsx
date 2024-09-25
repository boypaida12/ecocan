import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import StyledText from "@/components/shared/styled-text";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { Card } from "@/components/ui/card";
import { beachBottle } from "@/lib/imageIndex";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const litterContent = [
  {
    content:
      "When you carelessly discard empties instead of returning them to ECO-stations, you'll be helping counterfeit criminals. Who will simply pick the empties, fill them with fake drinks, and put them back to the market. And they'll look exactly similar as genuine drinks",
  },
  {
    content: (
      <p>
        But with <HyperLink link="EcocanApp" href="/" />, you now have the power
        to identify fakes. Nevertheless, ensure to return your empties to
        ECO-stations, that we completely starve these criminals{" "}
      </p>
    ),
  },
  {
    content: (
      <p>
        If you’re a producer who doesn’t safeguard the integrity of your
        products, nor facilitate elaborate recycling of the post-consumer
        empties, you’re inadvertently supporting counterfeit trade
      </p>
    ),
  },
  {
    content: (
      <p>
        So, let’s join hands in the <HyperLink link="ECOmmunity" href="/" /> and
        stop these criminals, protect our health from harmful fake drinks,
        ensure we get value for money, and safeguard our legitimate businesses
      </p>
    ),
  },
];

export default function WasteLitter() {
  return (
    <>
      <ImageAndItem
        className="gap-12 items-center"
        image={
          <Image
            src={beachBottle}
            alt="beach bottle"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        }
        item={
          <TextWithCards
            className="w-full"
            title="Waste litter => Counterfeit trade"
            description="Counterfeit criminals often lack capacity to legitimately acquire new bottles for their illegal fake drinks. Instead, they rely on genuine used empties carelessly thrown in the environment, as their primary source of packaging."
            customCard={
              <>
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="px-2 py-4 mt-6">
                    {litterContent.map((card, index) => (
                      <CarouselItem key={index} className="md:basis-4/6">
                        <Card className="border-none shadow-lg p-4 h-full">
                          <div className="text-accent/50 text-sm">
                            {card.content}
                          </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute top-2 right-5">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </>
            }
          />
        }
      />
    </>
  );
}
