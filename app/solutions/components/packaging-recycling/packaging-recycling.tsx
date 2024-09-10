import TextWithComponent from "@/components/contents/consumer/components/buy-online";
import { ItemList } from "@/components/contents/courier/components/ItemList";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import StyledText from "@/components/shared/styled-text";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { alphaMale, beachBottleTall, ecostation } from "@/lib/imageIndex";
import Image from "next/image";
import React from "react";

const howToData = [
  {
    id: 1,
    title: "You’ll be helping reduce packaging litter in the environment",
  },
  {
    id: 2,
    title:
      "Combat illicit trade by depriving counterfeit criminals of their primary source of packaging",
  },
  {
    id: 3,
    title:
      "And increasing the usefulness of used packaging which are recycled to make new bottles ",
  },
  {
    id: 4,
    title:
      "Therefore, reducing CO2e emissions, significantly curbing global warming and climate change",
  },
  {
    id: 5,
    title:
      "And we will make sure your recycling experience is most convenient, and pleasantly unforgettable.",
  },
];

export default function PackagingRecycling() {
  return (
    <div className="space-y-24">
      <TextWithComponent
        title="Packaging Recycling"
        description={
          <div className="w-[81%] space-y-4">
            <p>
              ECOCAN D.R.S is a circular economy platform, which streamlines the
              extensive collection and recycling of{" "}
              <HyperLink link="genuine eligible empties" href="/" />. And
              ensures participants make money for taking part
            </p>
            <p>
              This is achieved by creating a marketplace for used empties, by
              conveniently connecting ECO-Producers and ECO-Recyclers seeking to
              ‘buy’ empties for reuse or recycling, with ECOnsumers who have the
              empties but lack access to the market
            </p>
          </div>
        }
      />
      <ImageAndItem
        className="gap-12"
        image={
          <Image
            src={beachBottleTall}
            alt="beach bottle"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        }
        item={
          <TextWithCards
            className="w-full"
            title="So how does it really work?"
            description={
              <div>
                <StyledText>
                  The ECOCAN D.R.S is a take-back collection instrument for used
                  empties. Whereby a refundable fee is added onto the selling
                  price of ECO-products at point of sale
                </StyledText>
                <StyledText>
                  This fee assigns extrinsic financial value to genuine eligible
                  empties, thereby transforming them from supposed waste, to
                  resource
                </StyledText>
                <StyledText>
                  ECOnsumers can reclaim this fee by returning{" "}
                  <HyperLink link="eligible empties" href="/" /> to ECO-Stations
                  for recycling
                </StyledText>
                <StyledText>
                  And if the purchasing ECOnsumer accidentally litters eligible
                  empties, other ECOnsumers can pick them and return to
                  ECO-Stations to claim the deposit
                </StyledText>
                <StyledText>
                  The journey of the empties doesn’t end there. ECOuriers
                  pick-up the empties from ECO-Stations, and drop them off to
                  ECO-Recyclers for closed-loop recycling
                </StyledText>
                <StyledText>
                  Material from recycled bottles is used to manufacture new
                  bottles, hence reducing reliance on virgin materials, cutting
                  CO2 emissions and lowering energy consumption
                </StyledText>
              </div>
            }
          />
        }
      />
      {/* recycling is cooperation */}
      <ImageAndItem
        className="gap-12 md:flex-row-reverse"
        image={
          <Image
            src={alphaMale}
            alt="beach bottle"
            width={1000}
            height={1000}
            className="w-full h-full rounded-2xl"
          />
        }
        item={
          <TextWithCards
            className="w-full"
            title="Recycling is cooperation"
            description={
              <div>
                <StyledText>
                  ECOCAN provides requisite technology, and sets up the DRS
                </StyledText>
                <StyledText>
                  ECO-Producers apply deposit incentive to ECO-products, to
                  encourage return for recycling. And print ECOCAN Security
                  Codes onto their packaging, to safeguard product integrity
                </StyledText>
                <StyledText>
                  ECOnsumers authenticate genuine products before purchase, and
                  return intact eligible empties to ECO-stations, to reclaim
                  deposit
                </StyledText>
                <StyledText>
                  ECO-Stations accept returned packaging and issue applicable
                  deposit. As well as facilitate ECOCAN Market purchases
                </StyledText>
                <StyledText>
                  ECOuriers handle deliveries to ECOnsumers, and pick-up
                  returned empties from ECO-stations
                </StyledText>
                <StyledText>
                  ECO-Recyclers process dropped-of empties, and manufacture new
                  packaging
                </StyledText>
                <StyledText>
                  ECO-Producers use recycled packaging for new ECO-products. And
                  the cycle is repeated
                </StyledText>
                <StyledText>
                  ECOCAN ensures everyone is happy, and makes money for their
                  participation
                </StyledText>
              </div>
            }
          />
        }
      />
      {/* small deeds */}
      <ImageAndItem
      className="md:flex-row-reverse"
        item={
          <TextWithComponent
            title="Small deeds, with BIG impacts"
            description="Whether your motivation for returning empties is to earn money, or because you are ecologically conscious:"
            component={howToData.map((data) => {
              return <ItemList id={data.id} title={data.title} key={data.id} />;
            })}
          />
        }
        image={
          <Image
            src={ecostation}
            alt="eco station"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        }
      />
    </div>
  );
}
