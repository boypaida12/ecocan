import Link from "next/link";

const HyperLink = ({ link, href }: { link: string, href: string }) => {
  return (
    <Link href={href} className="text-primary relative after:absolute after:content-[''] after:bg-primary/90 after:h-[1px] after:w-full after:left-0 after:bottom-[-2px]">
      {link}
    </Link>
  );
};

export default HyperLink;
