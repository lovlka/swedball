'use client';

import { Container, Flex } from '@radix-ui/themes';
import ThemeToggle from './components/theme-toggle';
import { NavMenu } from './components/nav-menu';

export default function Header() {
  return (
    <header>
      <Container py="2" px="3">
        <Flex align="center" justify="between">
          <NavMenu />
          <ThemeToggle />
        </Flex>
      </Container>
    </header>
  );
}
