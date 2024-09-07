// import React from 'react'
// import ImageAndItem from "../../../shared/image-and-item/image-and-item"
// import Image from "next/image";
// import { ItemList } from './ItemList';

// const HowTo = () => {

//   const howToData = [
//     {
//       id: 1,
//       title: "Tell us a bit about yourself",
//       description: (
//         <p className="text-xs">Fill out the <span className="underline text-[#4AC63F]">Sign-up form</span>, maybe tell us why you rock,<br/> and have your ID + Driving licence ready</p>
//       ),
//     },
//     {
//       id: 2,
//       title: "You'll need a smartphone",
//       description: (
//         <p className="text-xs">It&apos;d be easier to just shout instructions at you, but we can&apos;t. So, grab a working smartphone </p>
//       ),
//     },
//     {
//       id: 3,
//       title: "Be mobile",
//       description: (
//         <p className="text-xs">Deliver however, but don&apos;t use fossil fuel. And don&apos;t keep ECOnsumers waiting</p>
//       ),
//     },
//     {
//       id: 4,
//       title: "And have insurance",
//       description: (
//         <p className="text-xs">Let&apos;s keep the good times rolling! So get yourself covered, that we keep doing this. Together</p>
//       ),
//     }
//   ]

//     const Item = ()=> (
//         <div className="w-[31.3rem] h-[33.75rem] pl-[48px]">
//           <div className="text-accent mt-1 mb-8">
//             <p className="text-2xl font-semibold pb-1">How to become an Eco-Courier</p>
//             <p className="text-sm ">Want to start earning more today? With ECOCAN, it&apos;s <br/>easy like Sunday Morning. </p>
//           </div>
//           {
//             howToData.map((data) => (
//               <ItemList key={data.id} title={data.title} description={data.description} id={data.id} />
//             ))
//           }
//         </div>
//       )

//   return (
//     <div className="w-[65rem] py-[40px]">
//     <ImageAndItem
//       title=""
//       subtitle=""
//       description=""
//       item={<Item/>}
//       image={<Image src="/assets/images/courier/become.png" className="p-0 m-0" width={491} height={540} alt=""/>}
//     />
//   </div>
//   )
// }

// export default HowTo

import React from "react";
import ImageAndItem from "./image-and-item/image-and-item";
import Image from "next/image";
import { ItemList } from "../contents/courier/components/ItemList";

// Define prop types
interface HowToItem {
  id: number;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface HowToProps {
  itemsTitle: React.ReactNode;
  itemsSubtitle?: string;
  items: HowToItem[];
  imageSrc: string;
  imageAlt: string;
}

const HowTo: React.FC<HowToProps> = ({
  itemsTitle,
  itemsSubtitle,
  items,
  imageSrc,
  imageAlt,
}) => {
  const Item = () => (
    <div className="w-[31.3rem] h-[33.75rem] pl-[48px] ms-auto flex flex-col justify-center">
      <div className="text-accent mt-1 mb-8">
        <p className="text-2xl font-semibold pb-1">{itemsTitle}</p>
        <p className="text-sm">{itemsSubtitle}</p>
      </div>
      {items.map((data) => (
        <ItemList
          key={data.id}
          title={data.title}
          description={data.description}
          id={data.id}
        />
      ))}
    </div>
  );

  return (
    <>
      <ImageAndItem
        item={<Item />}
        image={
          <Image
            src={imageSrc}
            className="w-full h-[33.5rem]"
            width={500}
            height={100}
            alt={imageAlt}
          />
        }
      />
    </>
  );
};

export default HowTo;
