import { Sparkles, Code, Palette, LucideTriangleAlert, LucideRecycle, LucideCreditCard } from "lucide-react";

interface Feature {
  id: number;
  name: string;
  description: string;
  icon: JSX.Element;
}

const iconSize = 18;

const defaultFeaturesData: Feature[] = [
  {
    id: 1,
    name: "Avoid Fakes",
    description:
      "Use Eco-Scanner to identify genuine products before purchase, by scanning ECOCAN security codes only labelled onto eligible products",
    icon: <LucideTriangleAlert size={iconSize} />,
  },
  {
    id: 2,
    name: "Recycle and Earn",
    description:
      "Help us keep the environment clean; Use ECOCANmap to navigate to closest Eco-Station, handover eligible used bottles for recycling, and receive deposit money, plus discount coupons",
    icon: <LucideRecycle size={iconSize} />,
  },
  {
    id: 3,
    name: "Buy Online",
    description:
      "Discover new Eco-products on EcocanApp, place order with just a few clicks, and receive your favourite drinks in minutes; or allow us 60 minutes to aggregate orders, to help us save energy.",
    icon: <LucideCreditCard size={iconSize} />,
  },
];

interface FeaturesGridProps {
  features?: Feature[];
  bgColor?: string;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  features = defaultFeaturesData,
  bgColor = "bg-transparent"
}) => {
  return (
    <div>
      <div className={`mt-8 grid w-full grid-cols-2 gap-12 md:grid-cols-2 lg:grid-cols-3`}>
        {features.map((feature) => {
          return (
            <div key={feature.id} className={`width-fit text-left ${bgColor} py-4 rounded-xl`}>
              <div className="mb-2 w-fit rounded-lg bg-primary p-1 text-center text-white ">
                {feature.icon}
              </div>
              <div className="text-md mb-1 font-semibold text-gray-900">
                {feature.name}
              </div>
              <div className="font-regular max-w-sm text-sm text-[#00000080]">
                {feature.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface CustomCardProps extends FeaturesGridProps {}

const CustomCard: React.FC<CustomCardProps> = (props) => {
  return (
    <div>
      <FeaturesGrid {...props} />
    </div>
  );
};

export default CustomCard;
