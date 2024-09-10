import { usePathname } from 'next/navigation';
import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

import '../styles/nav-menu.css';

type Props = {
  href: string;
  children: React.ReactNode;
};

function NavItem({ href, children }: Props) {
  const pathname = usePathname();
  const className = pathname === href ? 'active' : '';

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function NavMenu() {
  return (
    <Flex align="center" gap="5" className="nav-menu">
      <Image src="/logo.png" alt="Swedball" height={30} width={20} />
      <NavItem href="/">Sök företag</NavItem>
      <NavItem href="/about">Om tjänsten</NavItem>
    </Flex>
  );
};
