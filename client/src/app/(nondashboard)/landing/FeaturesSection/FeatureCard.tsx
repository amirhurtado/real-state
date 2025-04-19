import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: FeatureCardProps) => {
  return (
    <div className="p-4 w-full  flex flex-col items-center justify-center text-center ">
      <div className="relative h-36 w-48 mb-1 md:mb-2">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="w-full h-full  object-contain "
        />
      </div>

      <h3 className="text-lg font-semibold mb-3 ">{title}</h3>
      <p className="text-sm mb-6 text-gray-500">{description}</p>

      <Button >
      <Link href={linkHref} className="border-gray-300 rounded px-4 py-2" scroll={false}>{linkText}</Link>
      </Button>
    </div>
  );
};

export default FeatureCard;
