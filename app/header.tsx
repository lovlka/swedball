'use client';

import Image from 'next/image';
import { Container, Flex } from '@radix-ui/themes';
import ThemeToggle from './components/theme-toggle';

export default function Header() {
  return (
    <header>
      <Container>
        <Flex py="2" align="center" justify="between">
          <Image src="/logo.png" alt="Swedball" height={30} width={20} />
          <ThemeToggle />
        </Flex>
      </Container>
    </header>
  );
}
