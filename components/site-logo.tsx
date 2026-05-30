import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import logoDark from '@/public/assets/images/logo-dark.png';
import logoLight from '@/public/assets/images/logo-light.png';

interface SiteLogoProps {
  href: string;
  classes?: string;
  onClick?: () => void;
  imgSrcLight?: StaticImageData;
  imgSrcDark?: StaticImageData;
  imgAlt?: string;
  imgHeight?: number;
  imgWidth?: number;
  text?: string;
}

const SiteLogo = ({
  href,
  classes,
  onClick,
  imgSrcLight = logoLight,
  imgSrcDark = logoDark,
  imgAlt = 'Flowtrix Logo',
  imgHeight = 40,
  imgWidth = 120,
  text,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={cn('', classes)}
      onClick={onClick}
    >
      <Image
        src={imgSrcLight}
        alt={imgAlt}
        height={imgHeight}
        width={imgWidth}
        className='block h-auto w-35 dark:hidden'
      />
      <Image
        src={imgSrcDark}
        alt={imgAlt}
        height={imgHeight}
        width={imgWidth}
        className='hidden h-auto w-35 dark:block'
      />
      {text}
    </Link>
  );
};

export default SiteLogo;
