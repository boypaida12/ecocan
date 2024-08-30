import clsx from "clsx";
import Link from "next/link";

const HyperLink = ({
  link,
  href,
  className,
}: {
  link: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "text-primary relative after:absolute after:content-[''] after:bg-primary/90 after:h-[1px] after:w-full after:left-0 after:bottom-[-2px]",
        className
      )}
    >
      {link}
    </Link>
  );
};

export default HyperLink;
