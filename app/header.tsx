'use client';

import Image from 'next/image';
import { Container, Flex } from '@radix-ui/themes';
import ThemeToggle from './components/theme-toggle';

export default function Header() {
  return (
    <header>
      <Container py="2" px="3">
        <Flex align="center" justify="between">
          <Image src="/logo.png" alt="Swedball" height={30} width={20} />
          <ThemeToggle />
        </Flex>
      </Container>
    </header>
  );
}
