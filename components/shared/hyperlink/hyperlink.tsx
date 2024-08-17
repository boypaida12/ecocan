import Link from "next/link";

const HyperLink = ({ link }: { link: string }) => {
  return (
    <Link href="/" className="text-primary">
      {link}
    </Link>
  );
};

export default HyperLink;
